import React from 'react'
import { connect } from 'react-redux'
import { getPanos, selectedPano, getPano, getUser } from '../../actions/actions.js'
import { Link, withRouter } from 'react-router-dom'


class PanoContainer extends React.Component {

  state = {
    userId: '',
    pano: {
      id: '',
      pano_url: '',
      caption:''
    }
  }

  componentDidMount () {
    console.log('in comp did mount');

    this.setState({
      userId: this.props.clickedPano.pano.user_id,
      pano: {
        id: this.props.clickedPano.pano.id,
        pano_url: this.props.clickedPano.pano.pano_url,
        caption: this.props.clickedPano.pano.caption
      }
    })
   this.props.getPanos()
 }

 handleVR = () => {
   this.props.selectedPano({pano: {id: this.props.pano.id, pano_url: this.props.url, caption: this.props.caption}})
   // this.props.getPano(this.props.pano.id)
   this.props.history.push(`/vr`)
   console.log(this.props.pano);

   //change state in componentDidUpdate
 }

 // componentDidUpdate = (prevProps) => {
 //   if (prevProps.clickedPano.pano.id !== this.props.clickedPano.pano.id) {
 //     this.setState ({
 //       userId: this.props.clickedPano.user.id,
 //       pano: {
 //       ...this.state.pano,
 //       pano_url: this.props.clickedPano.pano.pano_url,
 //       id: this.props.clickedPano.pano.id
 //       }
 //     }, () => {
 //       console.log('in component did update');
 //       this.props.getUser(this.props.pano.user.id)
 //       this.props.history.push(`/profile/${this.state.userId}`)
 //
 //     })
 //   }
 // }

 // handleProfile = () => {
 // }

 render() {


    return(
      <div>
      <div className="card large">
       <div className="card-image waves-effect waves-block waves-light">
         <img className="activator" src={this.props.url}/>
       </div>
       <div className="card-content">
         <span className="card-title activator grey-text text-darken-4">{this.props.user}<i className="material-icons right">more_vert</i></span>
         <p><Link to='/vr' onClick={this.handleVR}>View in VR</Link></p>
       </div>
       <div className="card-reveal">
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>{this.props.caption}</p>
       </div>
     </div>
      </div>
      // <div className='pano-container'>
      //   <Link to={`/profile/${this.state.userId}`} onClick={this.handleClick}>name of user</Link>
      //   //onClick to getUser and redirect to their Profile page
      //   <p>Date</p>
      //   <p> <img src={this.props.pano.pano_url}/> </p>
      //   <Link to='/vr' onClick={this.handleVR}>View in VR</Link>
      //   <p># of likes, # of comments</p>
      //   <li> {this.props.pano.caption} </li>
      //   <p> input field for adding comment </p>
      // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    clickedUser: state.clickedUser,
    clickedPano: state.clickedPano
  }
}

export default withRouter(connect(mapStateToProps, { getPanos, selectedPano, getPano, getUser })(PanoContainer))
