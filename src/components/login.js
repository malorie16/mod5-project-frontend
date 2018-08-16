import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/actions.js'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

  state = {
    user: {
      email: '',
      password: '',
      id: 1
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
      email: e.target.value
      }
    })
  }

  handlePassword = (e) => {
    this.setState({
      user: {
        ...this.state.user,
      password: e.target.value
      }
    })
  }

  handleSubmit = (e) => {

    e.preventDefault()
    // this.props.getUser(this.state.user)
    this.props.loginUser(e.target.email.value.trim(), e.target.password.value.trim())
  }

  render () {
    // console.log(this.state.user.password);
    // console.log(this.state.user.email);
    return (
      <div className="login">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <input type="password" name='password' value={this.state.password} onChange={this.handlePassword}/>
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }
}



export default withRouter(connect(null, { loginUser })(Login))
