import React from 'react'
import aframe from '../../node_modules/aframe'
//was just import 'aframe'
import { connect } from 'react-redux'



class PanoramaMobile extends React.Component {

  componentWillUnmount() {
    document.body.classList.remove('a-body')
  }

  render() {
    return (
      <a-scene class="scene" wasd-controls-enabled="false" vr-mode-ui="enabled: true" embedded>
        <a-assets>
          <img id="field" crossOrigin src={this.props.clickedPano.pano.pano_url} alt=""></img>
        </a-assets>
        <a-sky src="#field" rotation="0 -130 0"></a-sky>
      </a-scene>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clickedPano: state.clickedPano
  }
}

export default connect(mapStateToProps)(PanoramaMobile)
