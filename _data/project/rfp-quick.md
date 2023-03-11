---
template: ProjectPost
path: /project/rfp-quick
date: 2022-12-31
title: rfpQuick
tags: "featured, javascript, react, nodejs, mysql, tailwind"
description: >-
    This document generation tool enables the creation of business proposals in a standard format. I contributed to the frontend, implementing features such as account creation, login, API connection, autosave integration, and PDF generation using React.
metaDescription: >-
    RFP Document Generation Tool
thumbnail: /assets/rfpQuick1laptop.png
---

# Introduction

rfpQuick was my main project as part of my internship at 3S. It is a RFP (Request for Proposal) document generation tool.

My contributions include:

-   Creating 25+ React components for rfpQuick to handle navigation, alerts, document display and document creation.
-   Improving user experience and accessibility by using a screen reader during the development phase (ChromeVox)
-   Adding features such as:
    -   Account creation
    -   Login and password reset
    -   A ten step form with autosave integration
    -   PDF generation based on user data
    -   Site navigation
    -   Automatic form fill with user and business information

# Built With

-   React
-   Node JS
-   MySQL
-   Formik
-   Tailwind CSS

# Gallery

The first page that the user sees when they login is the homepage, with a list of the documents that they are working on.

![homepage](/assets/rfpQuick1.png)

If they have just created their account, they will be asked to fill out their profile.

![profile](/assets/rfpQuick2.png)

Then they can use the Quickstart section on the homepage to create a new document.

![quickstart](/assets/rfpQuick8.png)

![new document popup](/assets/rfpQuick1b.png)

To fill out the details for their document, users are taken to a ten step form. The information from their profile is automatically filled in.

![profile](/assets/rfpQuick4.png)

This form contains custom components that assist in easily inputing the fields needed for an RFP.

![custom component](/assets/rfpQuick5.png)

When finished, users can generate a pdf version of their proposal document. If they do not have all the required fields, they will be alerted:

![missing fields alert](/assets/rfpQuick6.png)

However, if they do have all of the required fields, a PDF document will be generated on the frontend.

![document generation](/assets/rfpQuick7.png)

---

Here are some of the components I created for rfpQuick.

![component list](/assets/rfpQuick9.png)
