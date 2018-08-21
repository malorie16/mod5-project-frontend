import React from 'react'
import 'aframe'
import { connect } from 'react-redux'



class PanoramaMobile extends React.Component {
  state = {
    pano: {
      id: '',
      pano_url: ''
    }
  }

  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.clickedPano.pano.id !== this.props.clickedPano.pano.id) {
  //     this.setState ({
  //       pano: {
  //       ...this.state.pano,
  //       pano_url: this.props.clickedPano.pano.pano_url,
  //       id: this.props.clickedPano.pano.id
  //       }
  //     })
  //   }
  // }

  render() {
    console.log("INSIDE RENDER", this.props.clickedPano)
    return (

      <a-scene class="scene"  vr-mode-ui="enabled: false" embedded>
        <a-assets>
          <img id="field" crossOrigin src={this.props.clickedPano.pano.pano_url} alt=""></img>
          {/*<img id="field" crossOrigin src='puydesancy.jpg' alt=""></img>*/}
        </a-assets>
        <a-sky src="#field" rotation="0 -130 0"></a-sky>
      </a-scene>


    )
  }
}

const mapStateToProps = (state) => {
  console.log('inmapstate', state);
  return {
    clickedPano: state.clickedPano
  }
}

export default connect(mapStateToProps)(PanoramaMobile)
