import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/actions.js'


class Nav extends React.Component {

  // handleClick = () => {
  //   this.props.logout()
  // }
  //
  // currentUser = () => {
  //   if (this.props.currentUser.user.name === undefined) {
  //     return (
  //       <div>
  //         <Link to='/signup'>Create Account</Link>
  //         <Link to='/login'>Login</Link>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         {this.props.currentUser.name}
  //         <Link to='/home'>Home</Link>
  //         <Link to='/profile'>Profile</Link>
  //         <Link to='/upload'>Create Post</Link>
  //         <Link to='/login' onClick={this.handleClick}>Logout</Link>
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">{this.props.currentUser.name}</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/upload'>Create Post</Link></li>
              <li><Link to='/login' onClick={this.handleClick}>Logout</Link></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav sidenav-close" id="mobile-demo">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li> <Link to='/upload'>Create Post</Link></li>
          <li><Link to='/login' onClick={this.handleClick}>Logout</Link></li>
        </ul>
        </div>
      // <div>
      //   <div>
      //     {this.props.currentUser.name}
      //     <Link to='/home'>Home</Link>
      //     <Link to='/profile'>Profile</Link>
      //     <Link to='/upload'>Create Post</Link>
      //     <Link to='/login' onClick={this.handleClick}>Logout</Link>
      //   </div>
      // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, { logout })(Nav)
