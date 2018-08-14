import React from 'react'
import { connect } from 'react-redux'
import PanoContainer from './panocontainer/panocontainer.js'
import { getPanos } from '../actions/actions.js'

class Home extends React.Component {

  componentDidMount () {
   this.props.getPanos()
 }

 panos = () => {
   return this.props.panos.map(pano => {

     return <PanoContainer key={pano.id} pano={pano} caption={pano.caption} url={pano.pano_url} user={pano.user.name}/>
   })
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
