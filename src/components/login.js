import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/actions.js'
import { withRouter } from 'react-router-dom'
import Loader from './loader.js'


class Login extends React.Component {

  state = {
    user: {
      email: '',
      password: ''
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
    this.props.loginUser(e.target.email.value.trim(), e.target.password.value.trim())
  }

  render () {
    if (this.props.loading) {
      return <Loader />
    } else {
    return (
      <div >
        <form onSubmit={this.handleSubmit} className="login">
          <h3>Login</h3>
          <label className='form-label'>Email</label>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} className='initial-field'/>
          <br/>
          <label className='form-label'>Password</label>
          <input type="password" name='password' value={this.state.password} onChange={this.handlePassword} className='initial-field'/>
          <br/>
          <input type="submit" value="Submit" className='initial-submit'/>
          </form>
      </div>
      )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}


export default withRouter(connect(mapStateToProps, { loginUser })(Login))
