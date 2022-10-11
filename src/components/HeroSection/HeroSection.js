import React from 'react'
import Button from '../Button/Button'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
        <video src="videos/video-1.mp4" autoPlay loop muted ></video>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Video <i className="far fa-play-circle"></i></Button>

        </div>
    </div>
  )
}

export default HeroSection