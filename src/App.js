import React, { Component } from 'react';
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

  render() {
    // console.log(this.state.pano.image);
    // console.log('gotten pano:', this.state.getPano);
    return (
      <div>
        <Nav />

        <Switch>
            <Route path="/upload" render={(routerProps) => {

                return <CreatePano handlePano={this.handlePano}/>

              }} />
            <Route path="/profile" render={(routerProps) => {
                return  <Profile />
              }} />
            <Route path="/profile/:id" render={(routerProps) => {
                return  <Profile />
              }} />

            <Route path='/vr' render={(routerProps) => {
            // ternary based on if mobile state is true panoramaDesktop or PanoramaMobile
                  return <PanoramaMobile /> }}/>

             <Route path="/view" render={(routerProps) => {
                 return <PanoPost  />
                  }} />
             <Route path="/home" render={(routerProps) => {
                 return <Home  />
               }} />
             <Route path="/signup" render={(routerProps) => {
                 return <CreateUser  />
               }} />
             <Route path="/" render={(routerProps) => {
                 return <Login  />
               }} />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mobile: state.mobile
  }
}


export default withRouter(connect(mapStateToProps)(App));
