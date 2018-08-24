import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../actions/actions.js'


class Nav extends React.Component {

  handleClick = () => {
    this.props.logout()
  }

  renderPath = () => {
    return this.props.history.location.pathname === '/signup' ? <Link to='/login' className='nav-link bottom'>Login</Link> : <Link to='/signup' className='nav-link bottom' >Signup</Link>
  }

  click = () => {
    this.props.history.goBack()
  }

  renderBackButton = () => {
    return this.props.history.location.pathname === '/vr' ? <li className='nav-link top' onClick={this.click} >Back</li> : null
  }

  currentUser = () => {
    if (this.props.currentUser.user.name === 'logged out') {
      return (
        <div>
        <nav>
          <div className="nav-wrapper" >
            <Link to='/login' className=""><span className='panogram-title first'>Pan<img src='lens.svg' className='lens-icon first'/>gram</span></Link>

            <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li className='nav-link'>{this.renderPath()}</li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav sidenav-close" id="mobile-demo">
            <li className='nav-link'>{this.renderPath()}</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className='nav-container'>
        <nav >
          <div className="nav-wrapper"  >
            <Link to='/profile' className="brand-logo nav-link"><span className='panogram-title'>Pan<img src='lens.svg' className='lens-icon'/>gram</span> + {this.props.currentUser.user.name}</Link>
            <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li className='nav-link'>{this.renderBackButton()}</li>
                <li><Link to='/home' className='nav-link top'>Home</Link></li>
                <li><Link to='/profile' className='nav-link top'>Profile</Link></li>
                <li><Link to='/upload' className='nav-link top'>Create Post</Link></li>
                <li><Link to='/login' className='nav-link bottom' onClick={this.handleClick}>Logout</Link></li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav sidenav-close" id="mobile-demo">
            {this.renderBackButton()}
            <li className='nav-link top'><Link to='/home'>Home</Link></li>
            <li className='nav-link top'><Link to='/profile'>Profile</Link></li>
            <li className='nav-link top'> <Link to='/upload'>Create Post</Link></li>
            <li className='nav-link top'><Link to='/login' onClick={this.handleClick}>Logout</Link></li>
          </ul>
          </div>
      )
    }
  }

  render() {
    return (
      <div>{this.currentUser()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


export default withRouter(connect(mapStateToProps, { logout })(Nav))
