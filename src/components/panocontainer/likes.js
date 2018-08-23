import React from 'react'
import { like, addLike } from '../../actions/actions.js'
import { connect } from 'react-redux'


class Likes extends React.Component {
  state = {
    likes: this.props.likes || 0
  }

  like = () => {
      this.setState({
        likes: this.state.likes + 1
      })
       this.props.like({likes: this.state.likes + 1, pano_id: this.props.panoId})
  }

//post only post
  render() {
    return (
      <span id='likes-span' className="card-title activator grey-text text-darken-4"><img className='heart' src='heart.svg' onClick={this.like}></img> {this.state.likes} likes</span>
    )
  }
}

export default connect(null, { like, addLike })(Likes)
