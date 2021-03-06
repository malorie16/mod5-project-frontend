import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css';
import PanoramaDesktop from './components/panoramadesktop.js'
import PanoramaMobile from './components/panoramamobile.js'
import Nav from './components/nav.js'
import CreatePano from './components/CreatePano.js'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/login.js'
import CreateUser from './components/createUser.js'
import Profile from './components/profile.js'
import Home from './components/home.js'
import PanoPost from './components/panoPostPage.js'

class App extends Component {


 renderRoute = (route) => {
   return this.props.currentUser.user.name !== 'logged out' ?  route : <Redirect to='/login' />
 }

  render() {
    const loader = document.getElementById('lds-heart');

    if (loader && !loader.hasAttribute('hidden')) {
      loader.setAttribute('hidden', 'true');
    }

    return (
      <div>
        <Nav />
        <Route render={({ location }) => (
          <div>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={{enter: 800, exit: 0}}
            >
            <Switch location={location}>
                <Route path="/upload" render={(routerProps) => {
                  return this.renderRoute(<CreatePano handlePano={this.handlePano}/>)
                  }} />
                <Route path="/profile" render={(routerProps) => {
                    return this.renderRoute(<Profile/>)
                  }} />
                <Route path="/profile/:id" render={(routerProps) => {
                    return  <Profile />
                  }} />
                <Route path='/vr' render={(routerProps) => {
                  return this.renderRoute(<PanoramaMobile/>)
                    }}/>
                 <Route path="/view" render={(routerProps) => {
                   return this.renderRoute(<PanoPost/>)
                      }} />
                 <Route path="/home" render={(routerProps) => {
                   return this.renderRoute(<Home/>)
                 }} />
               <Route path="/signup" render={(routerProps) => {
                     return <CreateUser  />
                   }} />
               <Route path="/login" render={(routerProps) => {
                     return this.props.currentUser.user.name === 'logged out' ?  <Login/> : <Redirect to='/profile' />
                 }} />
               <Route path="/" render={(routerProps) => {
                 return <Redirect to='/login'/>
                 }} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
          )}/>
        </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    mobile: state.mobile,
    currentUser: state.currentUser
  }
}


export default withRouter(connect(mapStateToProps)(App));
