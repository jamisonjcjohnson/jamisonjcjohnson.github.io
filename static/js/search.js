$(function () {
  var initial = 0;
  var show = true;

  function toggleSearch(visible) {
    initial = 0;
    show = !visible;
    var visibility = visible ? "block" : "none";

    $("#search-content").val("");
    $(".search-tool").css("display", visibility);
  }

  function shouldToggle(time) {
    var gap = time - initial;
    initial = time;
    return gap < 500;
  }

  $(document).keyup(function (e) {
    var now = new Date().getTime();
    if (e.keyCode === 17 && shouldToggle(now)) {
      toggleSearch(show);
    } else if (e.keyCode === 27) {
      toggleSearch(false);
    }
  });

  $("#search-content").keyup(function (e) {
    var now = new Date().getTime();
    if (e.keyCode === 17 && shouldToggle(now)) {
      toggleSearch(show);
    }
  });

  $("#close-btn").click(function () {
    toggleSearch(false);
  });

  $("#search-btn").click(function () {
    toggleSearch(true);
  });

  // Build the correct search.json URL.
  // In your case, baseurl should be "" because https://jamisonjohnson.me/search.json works.
  var baseurl = ($('meta[name="baseurl"]').attr("content") || "").replace(/\/$/, "");
  var searchJsonUrl = baseurl + "/search.json";

  function initTypeahead(items) {
    if (!items || !items.length) {
      console.error("Search index loaded but contains no items:", items);
      return;
    }

    $("#search-content").typeahead({
      source: items,
      displayText: function (item) {
        return (item && item.title) ? item.title : "";
      },
      afterSelect: function (item) {
        if (item && item.url) {
          window.location.href = item.url;
        }
      }
    });
  }

  $.getJSON(searchJsonUrl)
    .done(function (data) {
      // Support either {code:0,data:[...]} OR plain array [...]
      if ($.isArray(data)) {
        initTypeahead(data);
        return;
      }

      if (data && data.code === 0 && $.isArray(data.data)) {
        initTypeahead(data.data);
        return;
      }

      // Some generators may use {data:[...]} without code
      if (data && $.isArray(data.data)) {
        initTypeahead(data.data);
        return;
      }

      console.error("Unexpected search.json format:", data);
    })
    .fail(function (xhr, status, err) {
      console.error("Failed to load search index:", searchJsonUrl, status, err);

      // Fallback: try relative path (sometimes helpful with edge routing)
      $.getJSON("./search.json")
        .done(function (data) {
          if ($.isArray(data)) {
            initTypeahead(data);
          } else if (data && data.code === 0 && $.isArray(data.data)) {
            initTypeahead(data.data);
          } else if (data && $.isArray(data.data)) {
            initTypeahead(data.data);
          } else {
            console.error("Fallback search.json format unexpected:", data);
          }
        })
        .fail(function (xhr2, status2, err2) {
          console.error("Fallback also failed (./search.json):", status2, err2);
        });
    });
});

$(function () {
  $("pre").css("display", "block");
});
