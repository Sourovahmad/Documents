import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import image1 from '../../../images/Footer/teknopark_istanbul.png';
import image2 from '../../../images/Footer/yerli_yazilim.png';

const Footer = () => {
    return (
        <footer id='footer_area'>
            <div className='container'>
                <div className='footerInner'>
                    <div className='row'>
                        <div className='offset-md-1 col-md-5'>
                            <div className='d-flex justify-content-between footerList'>
                                <div>
                                    <h6>scopes.ai</h6>
                                    <ul>
                                        <li><a href="/">İşleyişimiz</a></li>
                                        <li><a href="/">Özelliklerimiz</a></li>
                                        <li><a href="/">Örnek Sanal Tur</a></li>
                                        <li><a href="/">Ücretler</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>İletişim</h6>
                                    <ul>
                                        <li><a href="/">Bize Ulaşın</a></li>
                                        <li><a href="/">Hakkımızda</a></li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">SSS</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Sözleşmeler Şartlar</h6>
                                    <ul>
                                        <li><a href="/">İptal ve İade Şartları</a></li>
                                        <li><a href="/">Site Kullanım Şartları</a></li>
                                        <li><a href="/">Gizlilik Politikası</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='offset-md-2 col-md-3'>
                            <div className='personalInfo'>
                                <h2>scopes</h2>
                                <ul>
                                    <li><h6>Merkez Ofes</h6></li>
                                    <li><p>Tekropark Istarbul</p></li>
                                    <li><p>Sanayi Mahallesi Teknopark Bulvan</p></li>
                                    <li><p>4A Apt No: 1/4A/101</p></li>
                                    <li><p>Pendik/Istanbul</p></li>
                                    <li><h6 className='pt-2'>0 (212) 909 0745 - info@durrya360.com</h6></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='socialInner'>
                <div className='container'>
                    <div className='row'>
                        <div className='offset-md-1 col-md-5'>
                            <div  className='d-flex flex-wrap text-center align-items-center gap-md-5 gap-lg-5'>
                                <img src={image1} class="img-fluid " alt=""/>
                                <img src={image2} class="img-fluid " alt=""/>
                                <p>Copyright © 2020 - Tüm hakları saklıdır.</p>
                            </div>
                        </div>

                        <div className='offset-md-2 col-md-3'>
                            <div className='socialIcon'>
                                <a href="/" className='f'><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;