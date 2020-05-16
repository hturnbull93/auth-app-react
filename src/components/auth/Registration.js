import React, { Component } from 'react'

export class Registration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault
  }

  handleChange = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Registration
