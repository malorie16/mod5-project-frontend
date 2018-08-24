import React from 'react'
import { connect } from 'react-redux'
import { getPanos, selectedPano, getPano, addComment, addLike, like, getComments } from '../../actions/actions.js'
import { Link, withRouter } from 'react-router-dom'
import Likes from './likes.js'
import '../../panoContainer.css'

class PanoContainer extends React.Component {

  state = {
    userId: '',
    pano: {
      id: '',
      pano_url: '',
      caption:''
    },
    comment: '',
    comments: this.props.comments || []
  }

 //sends user to vr page when 'View in vr' is clicked
 handleVR = () => {
   this.props.selectedPano({pano: {id: this.props.pano.id, pano_url: this.props.url, caption: this.props.caption}})
 }

//makes comment input a controlled field
 handleText = (e) => {
   this.setState({
     comment: e.target.value
   })
 }

//clears comment form
 resetForm = (e) => {
   this.setState({
     comment: ''
   })
 }

 //makes POST request when comment form submits
 handleSubmit = (e) => {
   e.preventDefault()
   const date = new Date().toDateString()
   this.setState({
     comments: this.state.comments.concat(date + ':' + ' ' + this.state.comment)
   })
   this.props.addComment({comment: this.state.comment, pano_id: this.props.id})
   this.resetForm(e)
 }

 render() {
    return(
      <div className='card-container'>
        <div className="card large">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.url}/>
            {/*pano*/}
          </div>
          {/*pano card slid down*/}
          <div className="card-content">
            {/*like button*/}
            <Likes panoId={this.props.id} likes={this.props.likes}/>
            <span className="card-title activator grey-text text-darken-4">{this.props.caption}<i className="material-icons right">more_vert</i></span>
            {/*VR button*/}
            <p><Link to='/vr' onClick={this.handleVR} id='vr-button'>View in VR</Link></p>
            {/*comment form*/}
             <div id='comment-div'>Add Comment: <form id='comment-form' onSubmit={this.handleSubmit} >
               <input className='comment-field' type='text' value={this.state.comment} onChange={this.handleText} className='initial-field comment'>
               </input><input type='submit' onClick={this.setComments} className='input-comment'></input>
              </form>
            </div>
         </div>
         {/*pano card slid up*/}
         <div className="card-reveal">
           <span className="card-title grey-text text-darken-4">{this.props.user}<i className="material-icons right">close</i></span>
           <p>{this.props.date}</p>
           <ul>
             {this.state.comments.reverse()}
           </ul>
         </div>
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    clickedUser: state.clickedUser,
    clickedPano: state.clickedPano,
    allComments: state.allComments,
    oneLike: state.oneLike
  }
}

export default withRouter(connect(mapStateToProps, { getPanos, selectedPano, getPano, addComment, addLike,like, getComments })(PanoContainer))
