import React from 'react';
import logo from '../../../images/PortfolioGallery/Footer/footer-logo-4.png';
import './Footer.css';
import { faFacebookF, faInstagram, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div id="footer_area">
            <div className='container'>
                <div className='row'>
                    <div className='offset-md-2 col-md-8'>
                        <div className='footerInfo'>
                            <a href="/">
                                <img src={logo} className='img-fluid' />
                            </a>

                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Gallery</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a className='last' href="/">Shop</a></li>
                                </ul>
                            </nav>

                            <div className='socialArea'>
                                <a href='https://www.tumblr.com/'><FontAwesomeIcon icon={faTumblr} /> </a>
                                <a href='https://twitter.com/'><FontAwesomeIcon icon={faTwitter} /> </a>
                                <a href='https://www.tumblr.com/'><FontAwesomeIcon icon={faInstagram} /> </a>
                                <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebookF} /> </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;