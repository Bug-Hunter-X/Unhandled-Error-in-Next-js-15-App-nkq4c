# Unhandled Error in Next.js 15 Application

This repository demonstrates a common error in Next.js 15 applications: unhandled errors causing the application to crash.  The `/about` route throws an error, resulting in a broken user experience.  The solution showcases proper error handling using `Error Boundaries`.

## Problem

The `about.js` file intentionally throws an error.  In a production environment, this would lead to a 500 error or a completely broken page.

## Solution

The `aboutSolution.js` file demonstrates how to use error boundaries in Next.js to gracefully handle errors, displaying a user-friendly message instead of a full application crash.