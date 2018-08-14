import React from 'react'
// import { connect } from 'react-redux'
import PanoContainer from './panocontainer/panocontainer.js'
import { connect } from 'react-redux'



class Profile extends React.Component {


  userPanos = () => {
    return this.props.currentUser.panos.map(pano => {

      return <PanoContainer key={pano.id} pano={pano} caption={pano.caption} url={pano.pano_url} user={this.props.currentUser.name}/>
    })
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
