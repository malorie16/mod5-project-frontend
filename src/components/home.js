import React from 'react'
import { connect } from 'react-redux'
import PanoContainer from './panocontainer/panocontainer.js'
import { getPanos } from '../actions/actions.js'

class Home extends React.Component {

  componentDidMount () {
    this.props.getPanos()
 }

 panos = () => {
   const panos =  this.props.panos.map(pano => {
     const date = new Date(pano.pano.created_at)
     return <PanoContainer key={pano.pano.id} pano={pano.pano} caption={pano.pano.caption} url={pano.pano.pano_url} user={pano.user.name} date={date.toDateString()}/>
   })
   return panos.reverse()
 }

  render(){

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
