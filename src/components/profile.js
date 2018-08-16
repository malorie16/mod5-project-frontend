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
      const date = new Date(pano.created_at)
      return <PanoContainer key={pano.id} pano={pano} caption={pano.caption} url={pano.pano_url} user={this.props.currentUser.name} date={date.toDateString()}/>
    })
    return panos.reverse()
    }
  }
  //iterate through user.panos and render pano containers

  render() {

    console.log(this.props);

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
