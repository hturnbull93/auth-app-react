# React Auth Practice

This is a project to practice interfacing with an API in a React front end app.

Interfaces with this [Rails API project](https://github.com/hturnbull93/rails-auth-practice).

## Development Journal

### Set up

Uses the React/Redux/Router starter project from npm package `devcamp-js-builder`.

### Add Dashboard and Home

In `src/components/Dashboard.js`:

Functional component, returns h1 with Dashboard.

In `src/components/Home.js`:

Class component, renders h1 with Home.

### Import React Router

In `src/components/app.js` imported `BrowserRouter`, `Switch` and `Route` from react-router-dom.

Render a `BrowserRouter` with nested `Switch`, and nested `Route`s within it for home and dashboard.

### Prepare Axios

Axios is a promise based HTTP package. It makes async fetch easier to do.

```bash
npm install axios --save
```

