---
template: ProjectPost
path: /project/linki
date: 2020-02-20T07:08:53.137Z
title: Link Vault
tags: "featured, javascript, react, idb"
description: "An easy way to store online meeting links. Uses a local, <strong>encrypted IndexedDB</strong> to store online meeting links and their passwords. I created it with <strong>React</strong> to solve the problem of having too many Zoom links to keep track of after all my classes went online."

metaDescription: A project using create-react-app to make a way to store online meeting links
thumbnail: /assets/linki.png
---

## Introduction

Linki is a React based link vault that uses a local, encrypted IndexedDB to store online meeting links and their passwords. I created it to solve the problem of having too many Zoom links to keep track of after all my classes went online.

## Built With

-   `create-react-app`
-   `secure-webstore`, an encrypted version of `idb-keyval` for storing meeting data securely in IndexedDB.

## Site Page

Try it out at [linki.netlify.app](https://linki.netlify.app)

## Gallery

This page asks the user to create a secure passkey that will be used to encrypt their data locally. Provides protection for meeting passcodes.

![Vault Generation](/assets/linki3.png)

This is the form to add and update meetings.

![Edit Meeting Form](/assets/linki4b.png)

This is the dashboard where you can see upcoming meetings, their passwords, and also click to launch them.

![Dashboard](/assets/linki5.png)
