import React from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { createPano } from '../actions/actions.js'
import { withRouter } from 'react-router-dom'
import '../upload.css'
import { updateCurrentUserPano } from '../actions/actions.js'
import Loader from './loader.js'


const CLOUDINARY_UPLOAD_PRESET = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
const CLOUDINARY_UPLOAD_URL = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_URL}`

class CreatePano extends React.Component {
  state = {
    imageUrl: '',
    uploadedFile: [],
    caption: ''
  }

  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files,
      imageUrl: files[0].preview
    });

  }

  handleChange = (e) => {
    this.setState({
      caption: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.uploadedFile.length === 0) {
      alert('Please upload an image 📸')
    } else {
    this.handleImageUpload(this.state.uploadedFile[0])
    }
  }

  handleImageUpload = (file) => {

   let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

   upload.end((err, response) => {
     if (response.body.secure_url !== '') {
       this.setState({
         imageUrl: response.body.secure_url
       })
       this.props.createPano({url: response.body.secure_url, userId: this.props.currentUser.user.id, caption: this.state.caption})
       const date = new Date().toDateString()
       this.props.updateCurrentUserPano({created_at: date, pano_url: response.body.secure_url, caption: this.state.caption})
       this.props.history.push(`/profile`)
     }
   });
  }

  renderPreview = () => {
    return this.state.imageUrl ? <img src={this.state.imageUrl} id='img-preview'/> : null
  }

  render(){
    return (
      <div className='div'>
        <p id='create-p'>Upload a Pano</p>
        <div className='drop-div'>
          <p>click below to upload</p>
            <Dropzone
              className='drop'
              multiple={false}
              accept="image/*"
              disablePreview={false}
              onDrop={this.onImageDrop}>
                <div class="lds-dual-ring"></div>
            </Dropzone>
          </div>
          {this.renderPreview()}
          <form onSubmit={this.handleSubmit} id='upload-form'>
          <label id='upload-label'>Caption:</label>
          <input type="text" name='caption' value={this.state.caption} onChange={this.handleChange} id='upload-input'/>
          <input type="submit" value='submit' className='initial-submit upload'/>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    clickedPano: state.clickedPano
  }
}

export default withRouter(connect(mapStateToProps, { createPano, updateCurrentUserPano })(CreatePano))
