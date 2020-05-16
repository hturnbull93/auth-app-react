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

### Registration form

In `src/components/auth/Registration.js`:

Class component, has state of `email`, `password` and `password_confirmation` constructed as empty strings.

Form fields value set to the corresponding state value, onChange as `handleChange`.

`handleChange` sets the state with the events name and target (fields need the same name as the state).

`handleSubmit` as the form's onSubmit event handler.

`handleSubmit` prevents the default event (post request).

Instead it makes an axios post request:

- url to target as localhost:3001/registrations (the Rails API).
- Object of data to pass with the post request (object containing user object with email, password and password_confirmation from state).
- config object with `withCredentials` as true (allows the cookie to be set on the browser, incredibly important!!!).

`Registration` imported into and rendered in `Home`.
