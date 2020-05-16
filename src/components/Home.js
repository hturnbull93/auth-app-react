import React, { Component } from 'react'
import Registration from './auth/Registration'

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
        <Registration handleAuth={this.handleAuth}/>
      </div>
    )
  }
}

export default Home
