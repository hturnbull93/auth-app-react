# React Auth Practice

This is a project to practice interfacing with an API in a React front end app.

Interfaces with this [Rails API project](https://github.com/hturnbull93/rails-auth-practice).

## Development Journal

### Set Up

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

### Registration Form

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

### Passing Back Up To Prop

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

Hybridising the Registration component as a login form also.

Renamed as `Auth`

Target is passed in as a prop, either 'registrations' or 'sessions'.

Target url of post request set with target prop, as is conditional rendering of password confirmation field and label, button text, and error message.

The function of `handleAuth` works the same in both types, as the format of the returned data is the same from both sessions and registrations API routes.

### Persisting Logged In Status

Currently refreshing the page switched a logged in user to logged out.

In `src/components/app.js`:

`checkLoginStatus` method gets from localhost:3001/logged_in, config object withCredentials set to true to allow cookie to be set. Then if the response data logged_in is true and the state loggedInStatus is "NOT_LOGGED_IN", call `handleAuth` with the data to set the state loggedInStatus and user.

Else if the response logged_in is false and the loggedInStatus is "LOGGED_IN" then clear the user in state and set loggedInStatus to "NOT_LOGGED_IN". It is important to check if the API says that the user is not logged in to remove them so the React app acts appropriately.

`checkLoginStatus` is called in `componentDidMount` lifecycle hook.

Added props to `Home` and `Dashboard` with the user, to display the user email on them.

### Logging Out

In `src/components/app.js`:

`handleLogOut` function clear the user in state and set loggedInStatus to "NOT_LOGGED_IN". Passed to Dashboard as a prop.

In `src/components/Dashboard.js`:

`handleLogOut` makes a delete request to localhost:3001/logout config object withCredentials as true (to be able to delete the cookie). Then, calls `handleLogOut` up the chain (to clear user object and set loggedInStatus) and pushes '/' onto props history (redirect to home).

Added button that calls `handleLogOut` onClick.
