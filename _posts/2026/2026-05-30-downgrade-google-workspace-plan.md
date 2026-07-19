---
title: Downgrade Google Workspace from Business Plus to Business Starter
layout: post
date: '2026-05-30'
description: Learn how to downgrade Google Workspace from Business Plus to Business Starter while protecting storage, Vault data, mobile access, and other important organizational services.
intro: "Google Workspace Business Plus includes substantially more storage, larger Google Meet sessions, Google Vault, advanced endpoint management, Secure LDAP, and enhanced security controls. Organizations that no longer need these capabilities may be able to reduce recurring expenses by moving to Business Starter. In this blog post, we will explain how to evaluate the impact and safely downgrade Google Workspace from Business Plus to Business Starter."
lang: en_US
image: "/static/assets/img/blog/2026/downgrade-google-workspace-plan/downgrade-google-workspace-plan.jpg"
keywords: Google Workspace downgrade, Business Plus to Business Starter, Google Workspace Business Starter, Google Workspace billing, Google Admin console, Google Vault, pooled storage
categories:
- Business
tags:
- google-workspace
- business-plus
- business-starter
- google-admin
- billing
icon: fa-google
---

Google Workspace Business Plus provides advanced capabilities intended for organizations that need additional storage, larger video meetings, information governance, advanced device management, and stronger administrative controls.

These features can be valuable, but not every small business needs them. An organization that primarily uses Gmail, Google Drive, Google Calendar, Google Docs, and smaller Google Meet sessions may be able to use Business Starter while significantly reducing its monthly subscription cost.

Downgrading is not simply a billing change. Business Plus includes features and storage limits that are not included with Business Starter. Before switching, administrators should review storage consumption, Google Vault retention requirements, endpoint management settings, Google Meet usage, security dependencies, and the organization's current payment plan.

In this blog post, we will explain how to evaluate the impact and safely downgrade Google Workspace from Business Plus to Business Starter.

<br>

* TOC
{:toc}

<br>

## Business Plus Versus Business Starter

Business Starter retains the primary Google Workspace productivity services, including:

- Custom business email through Gmail
- Google Drive
- Google Docs
- Google Sheets
- Google Slides
- Google Forms
- Google Calendar
- Google Chat
- Google Meet
- Google Sites
- Basic security and administrative controls
- Gemini features included with the Starter edition

However, Business Starter has substantially lower storage, meeting, security, and information-governance limits than Business Plus.

| Feature | Business Plus | Business Starter |
|---|---|---|
| Pooled storage | 5 TB per user added to the pool | 30 GB per user added to the pool |
| Google Meet participants | Up to 500 | Up to 100 |
| Meet attendance tracking | Included | Not included |
| Google Vault | Included | Not included by default |
| eDiscovery | Included | Not included by default |
| Secure LDAP | Included | Not included |
| Endpoint management | Advanced | Basic |
| Security controls | Enhanced | Standard |
| Custom business email | Included | Included |
| Gmail, Drive, Docs, and Calendar | Included | Included |

Google Workspace uses pooled storage. This means the storage allocation is combined across the organization rather than permanently assigning each user a separate storage quota.

For example:

- 10 Business Plus licenses provide approximately 50 TB of pooled storage.
- 10 Business Starter licenses provide approximately 300 GB of pooled storage.
- 25 Business Starter licenses provide approximately 750 GB of pooled storage.

The reduction from 5 TB to 30 GB per user is the most important consideration for many organizations.

Review the current edition comparison on the [Google Workspace pricing page](https://workspace.google.com/pricing.html) before making the change.

<br>

## Confirm That Business Starter Meets Your Needs

Business Starter may be appropriate when your organization:

- Has relatively low Gmail and Drive storage usage.
- Does not depend on Google Vault.
- Does not have legal holds or formal retention requirements.
- Does not use Secure LDAP.
- Does not require advanced endpoint management.
- Does not regularly host meetings with more than 100 participants.
- Does not require Google Meet attendance tracking.
- Does not depend on enhanced Business Plus security controls.
- Wants to reduce recurring licensing expenses.
- Has 300 or fewer users.

Business Starter may not be appropriate when your organization:

- Stores more than 30 GB per licensed user across the pooled environment.
- Uses Google Vault for retention or eDiscovery.
- Has active legal holds.
- Uses Secure LDAP for application authentication.
- Requires advanced mobile or endpoint management.
- Regularly hosts large Google Meet sessions.
- Depends on advanced security capabilities.
- Must comply with formal records-retention requirements.

The financial savings should be compared against the cost and risk of losing these capabilities.

<br>

## Important Organization-Wide Licensing Restriction

Google Workspace Business editions generally apply the same primary subscription to everyone in the organization.

You cannot normally keep some users on Business Plus while moving other users to Business Starter under the same primary Business subscription.

When the organization downgrades:

- All users transition to Business Starter.
- The new pooled storage limit applies across the organization.
- Business Plus features are removed for the organization.
- Existing compatible add-on licenses may remain assigned.
- The billing change applies to the complete primary subscription.

Organizations that need different feature levels for different groups should contact Google Workspace Sales or their reseller to discuss available licensing designs.

<br>

## Check Whether Google or a Reseller Manages Billing

The downgrade process differs when the subscription was purchased through a Google Workspace reseller.

To check the billing relationship:

- Sign in to the [Google Admin console](https://admin.google.com/) using a super administrator or billing administrator account.
- Open **Billing**.
- Select **Subscriptions**.
- Open the Google Workspace subscription.
- Review the payment plan and billing information.
- Look for reseller information or a reseller contact option.

If a reseller manages the subscription, you may not have the option to downgrade directly in the Admin console.

In that situation:

- Contact the reseller.
- Request a downgrade from Business Plus to Business Starter.
- Ask when the downgrade can take effect.
- Confirm whether the current contract has an early-change restriction.
- Request the new per-user price in writing.
- Confirm how existing add-ons will be handled.

Google provides additional guidance in its [reseller support documentation](https://knowledge.workspace.google.com/admin/billing/contact-your-google-reseller).

<br>

## Verify Your Administrative Permissions

The account performing the downgrade must have the required billing permissions.

A super administrator normally has the necessary access. A delegated administrator may require the **Billing Management** privilege.

If the downgrade controls are missing:

- Confirm that you are using the correct administrator account.
- Confirm that the account has billing-management privileges.
- Confirm that the subscription is not managed by a reseller.
- Review the current payment plan.
- Confirm that the organization is eligible for Business Starter.
- Sign out and back in after permissions are changed.

Do not perform a subscription change from an ordinary user account.

<br>

## Review the Current Payment Plan

Google Workspace subscriptions generally use one of two payment plans:

- Flexible Plan
- Annual/Fixed-Term Plan

### Flexible Plan

The Flexible Plan provides month-to-month billing.

With this plan:

- Users are billed monthly.
- Licenses can be added or removed.
- The subscription can generally be changed without waiting for a yearly renewal.
- The per-user monthly price is higher than the annual commitment price.

A Business Plus subscription already using the Flexible Plan can normally be downgraded directly from the Admin console.

### Annual or Fixed-Term Plan

The Annual/Fixed-Term Plan includes a contractual commitment for a specific number of licenses.

With this plan:

- The organization commits to one or more years of service.
- Additional licenses can normally be purchased during the term.
- The committed license count generally cannot be reduced until renewal.
- Canceling early does not eliminate the remaining contractual balance.
- A lower edition may not be immediately available during the commitment period.

Google states that an organization using an Annual/Fixed-Term Plan must generally switch to the Flexible Plan before downgrading to a lower edition.

The switch from Annual/Fixed-Term to Flexible is normally available:

- During an eligible free trial
- At the subscription renewal date

Review the [Google Workspace payment plan comparison](https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans) before proceeding.

<br>

## Schedule an Annual Plan to Change at Renewal

If Business Plus is currently under an Annual/Fixed-Term commitment, configure the renewal settings before the contract renews.

The exact menu labels may vary, but the general process is:

- Sign in to the Google Admin console.
- Open **Billing**.
- Select **Subscriptions**.
- Select **Google Workspace Business Plus**.
- Locate the payment plan or renewal settings.
- Select the option to change the renewal plan.
- Choose the **Flexible Plan** when the current commitment expires.
- Review the effective date.
- Save the change.

After the subscription transitions to Flexible, return to the subscription and complete the downgrade to Business Starter.

Do not allow the Business Plus annual commitment to renew automatically if your intention is to downgrade. A new annual term may delay the change until the next renewal period.

Contact Google Workspace Support or your reseller when the renewal option is unavailable or the effective date is unclear.

<br>

## Calculate the New Storage Limit

Business Starter adds 30 GB of pooled storage for each licensed user.

Use the following calculation:

**Number of Business Starter licenses × 30 GB**

Examples include:

| Licenses | Business Starter Pooled Storage |
|---:|---:|
| 1 | 30 GB |
| 5 | 150 GB |
| 10 | 300 GB |
| 20 | 600 GB |
| 25 | 750 GB |
| 50 | 1.5 TB |
| 100 | 3 TB |

Storage provided by eligible additional-storage subscriptions should be added to the calculated Business Starter pool.

For example:

- 10 Business Starter licenses provide 300 GB.
- An additional 1 TB storage subscription provides another 1,000 GB.
- The approximate total pooled limit would be 1,300 GB.

Confirm the exact additional-storage configuration before relying on it.

<br>

## Review Current Storage Consumption

Before downgrading:

- Sign in to the Google Admin console.
- Open **Storage**.
- Review the organization's total storage usage.
- Review storage by service.
- Review storage by user.
- Identify unusually large accounts.
- Compare current usage with the calculated Business Starter limit.

Storage can be consumed by:

- Gmail messages and attachments
- Google Drive files
- Shared drive content
- Google Photos
- Google Meet recordings
- Files owned by suspended users
- Large video files
- Backups and application data

Leave additional free capacity rather than reducing usage to exactly the new limit.

A reasonable target is to remain comfortably below the Business Starter pool so normal email, file creation, and collaboration can continue after the downgrade.

<br>

## What Happens When Storage Exceeds the New Limit?

Google does not immediately delete existing data when the organization exceeds its pooled storage limit after a downgrade.

However, users can face serious restrictions.

Potential Gmail restrictions include:

- Storage warnings
- Inability to send new messages
- Inability to receive new messages

Potential Google Drive restrictions include:

- Inability to upload new files
- Inability to save Gmail attachments to Drive
- Inability to create new Docs, Sheets, Slides, Forms, Drawings, or Recorder files
- Editing restrictions for certain collaborative files

Google Photos uploads may also be restricted.

An over-limit organization can therefore experience significant operational disruption even though existing data is not immediately deleted.

Reduce storage or purchase compatible additional storage before completing the downgrade.

<br>

## Preserve Vault Data

Google provides a specific procedure for preserving Vault data while switching editions.

The appropriate approach depends on:

- Whether legal holds exist
- Whether retention rules are configured
- Whether users have deleted data retained by Vault
- Whether Vault add-on licenses will be purchased
- Whether data must be exported
- The organization's legal and regulatory requirements

Do not assume that existing Vault-retained data will remain protected indefinitely after Business Plus licenses are removed.

Google notes that administrators may be able to restore certain lost edition features by upgrading again within a limited recovery period. This should not be treated as a substitute for a planned retention strategy.

Use the [Google guidance for preserving Vault data during an edition change](https://support.google.com/a/answer/10045834) as part of the downgrade plan.

<br>

## Review Advanced Endpoint Management

Business Plus includes advanced endpoint management capabilities that are not included with Business Starter.

These capabilities may be used for:

- Mobile device policies
- Strong screen-lock requirements
- Device approval
- Work profiles
- Application management
- Device certificates
- Advanced Windows management
- Remote account actions
- Administrative device controls

Google recommends enabling basic management before the downgrade when the organization currently uses advanced endpoint management.

This helps prevent users with enrolled devices from unexpectedly losing access to Google Workspace data.

Before switching:

- Review current endpoint-management settings.
- Identify devices using advanced management.
- Document policies that will no longer apply.
- Enable basic management where appropriate.
- Notify affected users.
- Test access using a representative device.
- Remove obsolete advanced-management dependencies.

Do not wait until after the downgrade to determine which devices depend on Business Plus controls.

<br>

## Create a Pre-Downgrade Checklist

Complete the following before changing the subscription:

- Confirm that Business Starter meets business requirements.
- Confirm that all users can move to the same primary edition.
- Verify that the subscription is billed directly by Google.
- Contact the reseller when applicable.
- Verify billing-management permissions.
- Review whether the plan is Flexible or Annual/Fixed-Term.
- Schedule an Annual Plan to become Flexible at renewal.
- Calculate the new pooled storage limit.
- Reduce storage below the new limit.
- Review Vault retention rules and legal holds.
- Preserve or export required Vault data.
- Review endpoint-management settings.
- Enable basic management when required.
- Identify Secure LDAP dependencies.
- Review Google Meet usage.
- Review advanced security dependencies.
- Review add-on subscriptions.
- Notify users of expected feature changes.
- Document the current subscription and settings.
- Obtain management approval.
- Schedule the downgrade during a low-impact period.

Keep screenshots or exports of the current billing and configuration pages for internal records.

<br>

## Downgrade Business Plus to Business Starter

Once the environment is ready:

- Sign in to the [Google Admin console](https://admin.google.com/).
- Open the navigation menu.
- Select **Billing**.
- Select **Subscriptions**.
- Select the **Google Workspace Business Plus** subscription.
- Select **More**.
- Select **Downgrade**.
- Select **Business Starter**.
- Review the displayed feature and storage impact.
- Select **Next**.
- Review the available payment plan.
- Review the user count.
- Review the new pricing.
- Enter a promotional code when applicable.
- Select **Checkout**.
- Select **Place Order**.

Google may adjust the labels or location of these controls over time.

The most important path is:

**Admin console > Billing > Subscriptions > Business Plus > More > Downgrade**

Use Google's [official Business Starter switching instructions](https://knowledge.workspace.google.com/admin/billing/switch-to-business-starter-edition) when the current interface differs from this guide.

<br>

## When Google Only Recommends an Upgrade

The Admin console may display recommendation cards emphasizing Business Standard, Business Plus, Enterprise, or other higher editions.

These recommendations do not necessarily mean that Business Starter is unavailable.

Instead of using the recommended edition cards:

- Open **Billing**.
- Select **Subscriptions**.
- Open the existing Business Plus subscription.
- Select **More**.
- Look for **Downgrade**.
- Select Business Starter from the downgrade options.

The **Buy or upgrade** page is primarily designed to add services or move to a higher edition. The downgrade control is normally located inside the existing subscription.

A related discussion is available in the [Google Workspace Admin Community](https://support.google.com/a/thread/217505186/how-do-i-change-what-google-is-recommending-for-workspace?hl=en).

<br>

## When the Downgrade Option Is Missing

The downgrade option may be unavailable because:

- The account lacks billing-management privileges.
- A reseller manages the subscription.
- The organization is under an Annual/Fixed-Term commitment.
- The annual subscription has not reached renewal.
- The subscription is already scheduled for another change.
- The account is in a temporary billing state.
- The organization uses an unsupported edition.
- The organization exceeds Business edition user limits.
- A recent subscription change has not finished processing.
- The Admin console session needs to be refreshed.

Troubleshoot the missing option by:

- Confirming the current payment plan.
- Confirming the subscription renewal date.
- Verifying administrator permissions.
- Checking for reseller ownership.
- Reviewing pending subscription changes.
- Signing out and signing back in.
- Trying a private browser session.
- Contacting Google Workspace Support.
- Contacting the reseller.

Do not cancel the complete Google Workspace subscription as a substitute for downgrading. Cancellation can interrupt Gmail and other organizational services.

<br>

## Verify the Downgrade

After completing the order:

- Return to **Billing**.
- Select **Subscriptions**.
- Confirm that Business Starter is listed.
- Confirm the effective date.
- Confirm the payment plan.
- Confirm the number of licenses.
- Review the estimated monthly charge.
- Review additional subscriptions.
- Open **Storage**.
- Confirm the new pooled storage limit.
- Test Gmail.
- Test Google Drive.
- Test Google Meet.
- Test mobile access.
- Confirm that critical applications still authenticate.
- Review administrator alerts.

The change may not appear instantly in every service.

Allow time for the subscription and feature changes to propagate throughout the organization.

<br>

## Monitor the Environment After the Downgrade

For the first several days after the change, monitor:

- Gmail delivery
- Google Drive uploads
- Document creation
- Storage warnings
- Mobile device access
- Google Meet sessions
- Authentication failures
- User support requests
- Admin console alerts
- Billing charges
- Add-on license assignments

Ask users to report:

- Missing features
- Inability to upload files
- Gmail delivery problems
- Mobile access failures
- Meeting limitations
- Application authentication problems

Document all issues and their resolutions.

<br>

## Upgrading Again After a Downgrade

Google allows organizations to upgrade to a higher Workspace edition when additional capabilities are needed.

However, Google documents special timing rules when a downgrade removes features such as Google Vault or data loss prevention.

Google currently states that:

- Certain lost features can be recovered by upgrading within 51 days.
- After that recovery period, the organization may need to wait at least 85 days before upgrading to an edition containing the lost feature.

These timeframes can change.

Do not downgrade with the assumption that the organization can move back and forth between editions at any time without restrictions.

Review the current switching terms before placing the order.

<br>

## Estimate the Potential Savings

At the time of publication, Google's standard United States pricing lists the following rates:

| Edition | Flexible Plan | Annual Plan |
|---|---:|---:|
| Business Starter | $8.40 per user per month | $7.00 per user per month |
| Business Plus | $26.40 per user per month | $22.00 per user per month |

Based on those standard rates, the approximate difference is:

- $18.00 per user each month on the Flexible Plan
- $15.00 per user each month on the Annual Plan

Example annual savings for the Flexible Plan:

| Users | Approximate Monthly Savings | Approximate Annual Savings |
|---:|---:|---:|
| 5 | $90 | $1,080 |
| 10 | $180 | $2,160 |
| 20 | $360 | $4,320 |
| 50 | $900 | $10,800 |

Example annual savings for the Annual Plan:

| Users | Approximate Monthly Savings | Approximate Annual Savings |
|---:|---:|---:|
| 5 | $75 | $900 |
| 10 | $150 | $1,800 |
| 20 | $300 | $3,600 |
| 50 | $750 | $9,000 |

These estimates exclude:

- Taxes
- Promotional discounts
- Reseller pricing
- Regional pricing
- Additional storage
- Vault add-ons
- Other Google Workspace subscriptions

Review the final checkout page for the actual cost before completing the downgrade.

<br>

## Recommended Change Record

Document the downgrade using a change record that includes:

- Current edition
- New edition
- Current payment plan
- New payment plan
- Renewal date
- Effective date
- Number of licenses
- Current storage usage
- New pooled storage limit
- Vault review results
- Endpoint-management review results
- Secure LDAP review results
- Meet usage review
- Add-on subscriptions
- Estimated monthly savings
- Business approval
- Technical approval
- User communication
- Validation results
- Rollback or upgrade considerations

This documentation can help explain future storage, security, or feature changes.

<br>

## Conclusion

Downgrading Google Workspace from Business Plus to Business Starter can produce meaningful cost savings, particularly for smaller organizations that primarily need business email, file storage, collaboration tools, and basic video meetings.

The most important step is evaluating the operational impact before placing the order. Business Starter provides only 30 GB of pooled storage per licensed user and does not include several Business Plus capabilities, including Google Vault, Secure LDAP, advanced endpoint management, larger Google Meet sessions, and enhanced security controls.

Administrators should review storage, preserve required Vault data, identify authentication dependencies, verify the payment plan, and contact the billing reseller when applicable. Organizations using an Annual/Fixed-Term Plan should also plan the transition around the subscription renewal date so the account can move to the Flexible Plan before the downgrade.

A carefully planned downgrade can reduce recurring costs without disrupting Gmail, Drive, collaboration, or other essential business services.

<br>

## Additional Resources

- [Switch to Google Workspace Business Starter](https://knowledge.workspace.google.com/admin/billing/switch-to-business-starter-edition)
- [Google Workspace Pricing and Feature Comparison](https://workspace.google.com/pricing.html)
- [Compare Flexible and Annual Payment Plans](https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans)
- [Google Workspace Admin Console](https://admin.google.com/)
- [Google Workspace Admin Community Discussion](https://support.google.com/a/thread/217505186/how-do-i-change-what-google-is-recommending-for-workspace?hl=en)
- [Google Vault Overview](https://support.google.com/vault/answer/2462365)
- [Preserve Vault Data When Switching Editions](https://support.google.com/a/answer/10045834)
- [Contact Your Google Workspace Reseller](https://knowledge.workspace.google.com/admin/billing/contact-your-google-reseller)
- [Google Workspace Storage Management](https://support.google.com/a/answer/12002268)
- [Google Workspace Support](https://support.google.com/a/)