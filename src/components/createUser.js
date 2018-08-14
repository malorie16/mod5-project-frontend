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
      <div className="login">
        <h3>Create User</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
          <label>Email</label>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="Submit"/>
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
