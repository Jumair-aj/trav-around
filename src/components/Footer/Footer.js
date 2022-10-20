import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to recieve our best vacation blogs
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder='Your Email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe Now</Button>
                </form>
            </div>
        </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <img src="images/trav-white.png" alt="" />
                    </div>
                    <div className="footer-link-items">
                       
                    <h2>Quick Links</h2>
                        <Link to="/signup">About Us</Link>
                        <Link to="/signup">Gallery</Link>
                        {/* <Link to="/signup">Videos</Link> */}
                        <Link to="/signup">Blog</Link>
                        <Link to="/signup">Contact</Link>

                    </div>
                </div>
                <div className="footer-link-wrapper footer-link-wrapper1">
                    <div className="footer-link-items">
                    <h2>Images</h2>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>
                        <Link to="/signup">How it Works</Link>

                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Trav Around
                        </Link>
                    </div>
                    <small className="website-rights">
                        Trav Around &copy; 2022, Designed by Jr 
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label = 'Facebook'
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label = 'Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label = 'Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label = 'Linkedin'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
    </div>
    )
}

export default Footer