import React from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { createPano } from '../actions/actions.js'
import { withRouter } from 'react-router-dom'


const CLOUDINARY_UPLOAD_PRESET = 'nq2cdlmm';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dvwowjik5/upload';

class CreatePano extends React.Component {
  state = {
    imageUrl: '',
    uploadedFile: [],
    caption: ''
  }

  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files
    });
  }

  handleChange = (e) => {
    this.setState({
      caption: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.handleImageUpload(this.state.uploadedFile[0])
  }

  handleImageUpload = (file) => {

   let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

   upload.end((err, response) => {
     if (err) {
       console.error(err);
     }

     if (response.body.secure_url !== '') {
       this.props.createPano({url: response.body.secure_url, userId: this.props.currentUser.user.id, caption: this.state.caption})
       this.props.history.push(`/view`)

     }
   });
  }

  render(){
    console.log('pano:', this.props.clickedPano)
    return (
      <div className='div'>
        <p id='create-p'>Upload a Pano!</p>
        <Dropzone
          className='drop'
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop}>
          <p>Drop it like its hot</p>
        </Dropzone>
        <form onSubmit={this.handleSubmit}>
        <label>Caption</label>
        <input type="text" name='caption' value={this.state.caption} onChange={this.handleChange}/>
        <input type="submit" value='submit'/>
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

export default withRouter(connect(mapStateToProps, { createPano })(CreatePano))
