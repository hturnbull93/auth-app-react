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

### Passing Props Down

In `src/components/app.js`:

Added a constructor setting up state of loggedInStatus: 'NOT_LOGGED_IN' and an empty object for user (to be populated later).

Alter `Route`s to use render prop, passing in props to an arrow function (jsx needs to use parentheses for nested arrow function), returning a `Home` and `Dashboard` component, spreading the passed props over it, and then adding loggedInStatus from state as a prop.

In `src/components/Home.js` and `src/components/Dashboard.js`:

Added a constructor to accept props, then render the loggedInStatus in an h2.

`Dashboard` simply takes props as an argument then renders props.loggedInStatus.

### Passing Back up to Prop

In `src/components/auth/Registration.js`:

If the result of the post request data's status is 'created' call `this.props.handleAuth` passing in the data (up the chain to `Home`). Else set state of error with a message 'That email is already in use', rendered conditionally in an h2.

In `src/components/Home.js`:

Added a method `handleAuth` that takes data and calls `this.props.handleAuth` passing in the data (up the chain to `App`). This also pushes '/dashboard' onto the props history (passed in spread props from `App`), causing 'redirect'.

Pass the method down to `Registration` as a prop

In `src/components/app.js`:

Added a method `handleAuth` that takes data and sets the state user with the data's user object, and the loggedInStatus as 'LOGGED_IN'.

Pass the method down to `Home` as a prop.

App: Grandparent, Home: Parent, Registrations: Child. For best practice do no more than grandparent behaviour manually, for more complex things use Redux state management.

### Login Component
