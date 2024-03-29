import React from 'react';
import '../styles/Footer.css';
import website_logo from "../images/website_logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



function Footer() {
    return (
        <footer>
            <div className="second-section">
                <h1 className="our-services footer-logo-hr"><img src={website_logo} alt="logo" /></h1>
            </div>
            <div className='footer-section-parent'>
                <div className='footer-contact-section footer-section-main'>
                    <h3>CONTACT US</h3>
                    <div className='footer-contact-first-section'>
                        <div className='footer-contact-content'><FaLocationDot className='footer-icon' /> 109/A, Rasi Nagar, North Collector Office, Collector Office Post, Karur - 639007</div>
                        <div className='footer-contact-content'><FaLocationDot className='footer-icon' /> HA-3, 9th Cross Street, RM Colony, Dindigul - 1</div>
                        <div className='footer-contact-content'><MdWifiCalling3 className='footer-icon' /> + 91-9943318199, +91-9943578199</div>
                        <div className='footer-contact-content'><MdEmail className='footer-icon' /> aargaaconstruction@gmail.com</div>
                    </div>
                </div>
                <div className='footer-social-section footer-section-main'>
                    <div className='footer-social-para'>
                        We believe in design as a process. We research into creating a built environment that is adaptive and contextual. We see architecture as a language that speaks of the place.
                    </div>
                    <div className='footer-social-icons'>
                        <div><a href='#'><FaFacebookF className='footer-icon-social' /></a></div>
                        <div><a href='#'><FaXTwitter className='footer-icon-social' /></a></div>
                        <div><a href='#'><FaInstagram className='footer-icon-social' /></a></div>
                    </div>

                </div>
                <div className='footer-navigation-section footer-section-main'>
                    <h3>QUICK LINKS</h3>
                    <div className='footer-quick-links'>
                        <div><a href='/'>Home</a></div>
                        <div><a href='/about'>About Us</a></div>
                        <div><a href='/services'>Services</a></div>
                        <div><a href='/gallery'>Gallery</a></div>
                        <div><a href='/contact'>Contact Us</a></div>
                    </div>
                </div>
            </div>
            <div className='footer-copyright-line'>
                Copyright {new Date().getFullYear()} | Powered by EMBLOCK
            </div>

        </footer>
    );
}

export default Footer;
