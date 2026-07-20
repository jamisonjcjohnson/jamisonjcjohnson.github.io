---
title: How to Copy and Paste Delimited Text Into Excel
layout: post
date: '2026-06-20'
description: Learn how to paste tab-delimited, comma-delimited, and other separated text into Microsoft Excel and divide the information into individual columns.
intro: "Delimited text uses characters such as tabs, commas, or semicolons to separate individual values. Microsoft Excel can often place tab-delimited text into separate cells automatically, while its Text to Columns tool can separate data that appears in a single column. In this blog post, we will explain how to copy and paste delimited text into Excel and correctly organize it into columns."
lang: en_US
image: "/static/assets/img/blog/2026/copy-paste-delimited-text-into-excel/copy-paste-delimited-text-into-excel.jpg"
keywords: copy delimited text into Excel, tab-delimited text, Excel Text to Columns, CSV data, separate text into columns
categories:
- Windows
tags:
- excel
- microsoft-office
- delimited-text
- text-to-columns
icon: fa-file-excel
---

Delimited text uses a specific character to separate values. Common delimiters include tabs, commas, semicolons, spaces, and vertical bars.

When text is properly separated by tabs, Excel can usually place each value into its own cell as soon as it is pasted. If the information appears in a single column instead, Excel's **Text to Columns** tool can separate it using the appropriate delimiter.

In this blog post, we will explain how to copy and paste delimited text into Excel and correctly organize it into columns.

<br>

* TOC
{:toc}

<br>

## What Is Delimited Text?

Delimited text is plain text in which a specific character separates each field.

Common delimiters include:

- Tabs
- Commas
- Semicolons
- Spaces
- Colons
- Vertical bars

For example, a tab-delimited row may contain:

`Name<TAB>Department<TAB>Extension`

Each tab indicates where a new Excel column should begin. A new line indicates where a new row should begin.

<br>

## Paste Tab-Delimited Text Directly Into Excel

Excel normally recognizes tab-delimited text automatically.

To paste the data:

- Highlight the tab-delimited text.
- Copy it using **Ctrl+C** on Windows or **Command+C** on macOS.
- Open Microsoft Excel.
- Select the cell where the first value should appear.
- Paste using **Ctrl+V** or **Command+V**.

Excel should place each tab-separated value into a different column and each line into a different row.

For example, selecting cell **A1** before pasting causes the first value to begin in A1, with the remaining values filling the adjacent cells.

<br>

## When Everything Appears in One Column

If all the information appears in one Excel column, the source may use commas, semicolons, spaces, or another character instead of tabs.

Use **Text to Columns** to separate it:

- Select the cells containing the pasted text.
- Open the **Data** tab.
- Select **Text to Columns**.
- Select **Delimited**.
- Select **Next**.
- Choose the delimiter used by the text.
- Review the data preview.
- Select **Next**.
- Choose the destination and column formats.
- Select **Finish**.

Make sure the columns to the right are empty before completing the process. Excel may overwrite existing information when it distributes the separated values into adjacent columns.

<br>

## Select the Correct Delimiter

Choose the character that separates each value in the original text.

Available options commonly include:

- **Tab** for tab-delimited data
- **Comma** for comma-separated data
- **Semicolon** for semicolon-separated data
- **Space** for space-separated data
- **Other** for a custom character

The preview window shows how Excel will divide the information.

When the preview does not look correct, try another delimiter or select more than one delimiter.

<br>

## Preserve Leading Zeros

Excel may automatically convert values that look like numbers.

For example:

`00125`

may become:

`125`

This can cause problems with:

- ZIP codes
- Employee numbers
- Product identifiers
- Account numbers
- Server or device identifiers

To preserve leading zeros:

- Open **Text to Columns**.
- Proceed to the final wizard screen.
- Select the affected column in the preview.
- Choose **Text** as the column data format.
- Select **Finish**.

You can also format the destination cells as **Text** before pasting the information.

<br>

## Prevent Incorrect Date Conversion

Excel may interpret values such as `3-10`, `10/12`, or `1-5` as dates.

To preserve the original value:

- Select the affected column in the Text to Columns preview.
- Choose **Text** as the column format.
- Complete the import.

Always review identifier, date, and numeric columns before saving the workbook.

<br>

## Paste Comma-Separated Text

Comma-separated text may look similar to:

`FirstName,IT,1234`

If Excel places the entire line in one cell:

- Select the pasted column.
- Open **Data > Text to Columns**.
- Select **Delimited**.
- Choose **Comma**.
- Review the preview.
- Select **Finish**.

This process also works for text copied from CSV files, reports, command output, and web applications.

<br>

## Troubleshooting

When the information does not separate correctly, check the following:

- Confirm which character separates the values.
- Verify that actual tabs are used rather than several spaces.
- Select the correct delimiter in Text to Columns.
- Remove inconsistent spacing.
- Confirm that quotation marks are properly paired.
- Make sure empty columns are available to the right.
- Format identifiers as Text before conversion.
- Paste the information into a plain-text editor to inspect it.
- Try importing the original `.txt` or `.csv` file instead of copying it.

When several spaces separate the values, selecting **Space** may create unwanted empty columns. Cleaning the source data first may produce better results.

<br>

## Conclusion

Excel can normally distribute tab-delimited text into separate cells automatically when it is copied and pasted into a worksheet. When the data uses commas, semicolons, spaces, or another separator, the Text to Columns tool provides greater control over how each field is divided.

Before completing the conversion, review the preview, protect leading zeros, prevent unwanted date conversions, and make sure the adjacent columns do not contain information that could be overwritten.

<br>

## Additional Resources

- [Microsoft Support - Import or Export Text Files](https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files)
- [Microsoft Support - Split Text Into Different Columns](https://support.microsoft.com/en-us/office/split-text-into-different-columns-with-the-convert-text-to-columns-wizard-30b14928-5550-41f5-97ca-7a3e9c363ed7)
- [Microsoft Support - Distribute Cell Contents Into Adjacent Columns](https://support.microsoft.com/en-us/excel/distribute-the-contents-of-a-cell-into-adjacent-columns)
- [wikiHow - Copy and Paste Tab-Delimited Text Into Excel](https://www.wikihow.com/Copy-Paste-Tab-Delimited-Text-Into-Excel)