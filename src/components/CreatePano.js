import React from 'react'
import { connect } from 'react-redux'

export default class CreatePano extends React.Component {
  state = {
    text: '',
    image: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleFile = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handlePano(this.state)
    document.getElementById('pano-form').reset()
  }

  render(){
    return (
      <div>
        Upload a Pano
          <form id='pano-form' onSubmit={this.handleSubmit}>
          <label>Choose file</label>
          <input type='file'onChange={this.handleFile}/>
          <label>Caption</label>
          <input type='text' onChange={this.handleChange}/>
          <input type='submit' />
          </form>
      </div>
    )
  }
}
