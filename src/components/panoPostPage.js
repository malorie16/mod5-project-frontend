import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PanoContainer from './panocontainer/panocontainer.js'

// THIS COMPONENT MAY BE DEPRECATED 

class PanoPost extends React.Component {

  state = {
    pano: {
      id: '',
      pano_url: '',
      userId: '',
      caption: ''
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.clickedPano.pano.id !== this.props.clickedPano.pano.id) {
      this.setState ({
        pano: {
        ...this.state.pano,
        id: this.props.clickedPano.pano.id,
        caption: this.props.clickedPano.pano.caption,
        pano_url: this.props.clickedPano.pano.pano_url
        }
      })
    }
  }

  render() {
    console.log('panopage', this.props.clickedPano);
    return (
      <div>
      <PanoContainer pano={this.props.clickedPano.pano} caption={this.props.clickedPano.pano.caption} url={this.props.clickedPano.pano.pano_url} user={this.props.clickedPano.user.name}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    clickedPano: state.clickedPano,
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(PanoPost))
