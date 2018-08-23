import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/actions.js'
import { withRouter } from 'react-router-dom'


class CreateUser extends React.Component {

  state = {
    user: {
      email: '',
      name: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
      [e.target.email]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.state.user)
    this.props.history.push("/profile")

  }

  render () {
    console.log(this.state.password);
    return (
      <div  >
        <form onSubmit={this.handleSubmit} className="login">
          <h3>Signup</h3>
          <label className='form-label'>Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} className='initial-field'/>
          <label className='form-label'>Email</label>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} className='initial-field'/>
          <br/>
          <label className='form-label'>Password</label>
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} className='initial-field'/>
          <br/>
          <input type="submit" value="Submit" className='initial-submit'/>
          </form>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => {dispatch(createUser(data))}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CreateUser))
