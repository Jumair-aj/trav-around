import React from 'react'
import Button from '../Button/Button'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
  // const vid = document.querySelector('video')
  // const h1 = document.querySelector('.heading-h1')
  // const text_contents = document.querySelector('.heading-text')
  // const btn_contents = document.querySelector('.hero-btns')

  // const handleScroll = ()=>{
  //   let value = window.scrollY
  //   h1.style.right = value * 2 + 'px'
  //   btn_contents.style.right = value * 2 + 'px'
    
  //   text_contents.style.right = value * 2 + 'px'
  //   vid.style.left = value * 1.5 + 'px'
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll,{passive:true});
  //   return () =>{
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // })
  return (
    <div className="hero-container">
        <video src="videos/video-1.mp4" autoPlay loop muted ></video>
        <h1 className='heading-h1'>Adventure Awaits</h1>
        <p className='heading-text'>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Video <i className="far fa-play-circle"></i></Button>

        </div>
    </div>
  )
}

export default HeroSection