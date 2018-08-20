import React from 'react'
// import { connect } from 'react-redux'
import PanoContainer from './panocontainer/panocontainer.js'
import { connect } from 'react-redux'



class Profile extends React.Component {


  userPanos = () => {
    if (!this.props.currentUser.panos) {
      return
    } else {

    const panos = this.props.currentUser.panos.map(pano => {
      const likes = !pano.likes ? null : pano.likes.length
      const likeId = !pano.likes[0] ? null : pano.likes[0].id
      const comments = pano.comments.map(comment => {
          const date = new Date(comment.created_at)
            return <li>{date.toDateString()}: {comment.comment} </li>

       })
      const panoDate = new Date(pano.created_at)
      return <PanoContainer key={pano.id} id={pano.pano.id} likes={likes} likeId={likeId} comments={comments} pano={pano} caption={pano.caption} url={pano.pano.pano_url} user={pano.user.name} date={panoDate.toDateString()}/>
    })
    return panos.reverse()
    }
  }
  //iterate through user.panos and render pano containers

  render() {

    console.log(this.props.currentUser);

    return (
      <div>
      {this.userPanos()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(Profile)
