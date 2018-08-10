import React, { Component } from 'react';
import './App.css';
import PanoramaDesktop from './components/panoramadesktop.js'
import PanoramaMobile from './components/panoramamobile.js'
import Nav from './components/nav.js'
import PanoContainer from './components/panocontainer/panocontainer.js'
import CreatePano from './components/CreatePano.js'
// import uploadPano from './adapter/adapter.js'
import axios from 'axios'
import axiosClient from './adapter/adapter.js'


class App extends Component {
  state = {
    pano: '',
    getPano: '',
    panos: []
  }


  handlePano = (data) => {
    console.log(data);
    const formattedImage = new FormData()
    formattedImage.append('image', data.image)
    console.log('formattedImage:',formattedImage)

    axiosClient.post('http://localhost:3030/panos', formattedImage)
      .then(resp => {
        this.setState({
          pano: resp
        })
      })
    // uploadPano(formattedImage)
    //   .then(resp => {
    //     this.setState({
    //       pano: resp
    //     })
    //   })
debugger
  }

  componentDidMount() {
    axiosClient.get('http://localhost:3030/panos/1')
      .then(resp => {
        this.setState({
          getPano: resp
        })
      })
      this.state.panos.push(this.state.getPano)

  }

  createSrc = () => {

    return URL.createObjectURL(new Blob(this.state.panos, {type: "application/zip"}))
  }


  render() {
    console.log(this.state.pano.image);
    console.log('gotten pano:', this.state.getPano);
    return (
      <div>
        <Nav />
        <PanoContainer pano={this.state.getPano}/>
        <PanoramaMobile />
        <CreatePano handlePano={this.handlePano}/>
        <img src={this.createSrc()}/>
        <p>HI</p>
      </div>
    )
  }
}

export default App;
