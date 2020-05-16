import React, { Component } from 'react'
import Auth from './auth/Auth'

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  handleAuth = (data) => {
    this.props.handleAuth(data)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
        <h2>Sign Up</h2>
        <Auth target="registrations" handleAuth={this.handleAuth}/>
        <h2>Log In</h2>
        <Auth target="sessions" handleAuth={this.handleAuth}/>
      </div>
    )
  }
}

export default Home
