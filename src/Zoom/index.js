import React from 'react'
import logo from './logo.svg';

export default class Zoom extends React.Component {

  imageNode = null

  handleTouchStart = e => {
    const distanceX = e.touches[1].screenX - e.touches[0].screenX
    const distanceY = e.touches[1].screenY - e.touches[0].screenY
  }

  handleTouchMove = () => {

  }

  handleTouchEnd = () => {

  }

  handleTouchCancel = () => {

  }

  render() {
    return (
      <div 
        className="outer" 
        onTouchStart={this.handleTouchStart} 
        onTouchMove={this.handleTouchMove} 
        onTouchEnd={this.handleTouchEnd} 
        onTouchCancel={this.handleTouchCancel}
      >
        <img src={logo} alt="img" ref={node => this.imageNode = node}/>
      </div>
    )
  }
}