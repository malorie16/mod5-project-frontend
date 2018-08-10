import React from 'react'
import { connect } from 'react-redux'

const PanoContainer = ({props}) => {

  return(
    <div className='pano-container'>
      <p>Username</p>
      <p>Date</p>
      <p>pano as jpg</p>
      <p># of likes, # of comments</p>
      <li> comments </li>
      <p> input field for adding comment </p>
    </div>
  )
}

export default connect()(PanoContainer)
