import React from 'react'
import 'aframe'


export default class PanoramaDesktop extends React.Component {

  render() {
    return (

      <a-scene class="scene" embedded>
        <a-assets>
          <img id="field" src="IMG_0574.JPG" alt=""></img>
        </a-assets>
        <a-sky src="#field" rotation="0 -130 0"></a-sky>
      </a-scene>


    )
  }
}
