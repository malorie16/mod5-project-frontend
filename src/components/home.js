import React from 'react'
import { connect } from 'react-redux'
import PanoContainer from './panocontainer/panocontainer.js'
import { getPanos } from '../actions/actions.js'

class Home extends React.Component {

  state = {
    render: true
  }

  componentDidMount () {
    this.props.getPanos()
 }

 reRender = () => {
   this.setState({
     render: !this.state.render
   })
 }

 panos = () => {
   const panos =  this.props.panos.map(pano => {
     // debugger
     const likes = !pano.likes ? null : pano.likes.length
     const likeId = !pano.likes[0] ? null : pano.likes[0].id
     const comments = pano.comments.map(comment => {
         const date = new Date(comment.created_at)
           return <li>{date.toDateString()}: {comment.comment} </li>
      })
     const date = new Date(pano.pano.created_at)
     return <PanoContainer key={pano.pano.id} id={pano.pano.id} render={this.reRender} pano={pano.pano} caption={pano.pano.caption} url={pano.pano.pano_url} user={pano.user.name} likes={likes} likeId={likeId} comments={comments} date={date.toDateString()}/>
   })
   return panos.reverse()
 }

  render(){
    console.log('pano in home:', this.props.panos);

    return (
      <div className='panos'>
        {this.panos()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    panos: state.panos
  }
}

export default connect(mapStateToProps, { getPanos })(Home)
