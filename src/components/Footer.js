import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container-fluid main-footer-box'>
                    <div className='container upper-footer-box '>
                        <div className='row'>
                            <div className='col-6 col-sm-6 col-md-3 mb-1'>
                                <h3>E-Store</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='col-6 col-sm-6 col-md-3 mb-1'>
                                <h3>Subscribe to get important updates</h3><br/>
                                <form action='#'>
                                    <input type='email' placeholder='ex@gmail.com' /><br/><br/>
                                    <input type='submit' value="subscribe" />
                                </form>
                            </div>
                            <div className='col-6 col-sm-6 col-md-3'>
                                <h3>Follow us </h3>
                                <div className='social-icons'>
                                    <div><a href='/' target='blank' className='text-white'><FaDiscord /></a></div>
                                    <div><a href='/' target='blank' className='text-white'> <FaInstagram /></a></div>
                                    <div><a href='/' target='blank' className='text-white'><FaFacebook /></a></div>
                                    <div>
                                        <a href='https://www.youtube.com/channel/UCKI_33tHAW-iYkRU1-tlR9Q' className='text-white' target='blank'>
                                            <FaYoutube />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 col-sm-6 col-md-3'>
                                <h3>Call us</h3>
                                <h4>
                                    <a href='tel:1234567890' className="text-decoration-none">+91 1234567890</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='container lower-footer-box'>
                        <hr />
                        <div className='row'>
                            <div className='col-6 col-sm-6 col-md-6 text-center'>
                                <p>
                                    @{new Date().getFullYear()} Ecommerce-Store All Reserved Rights.
                                </p>
                            </div>
                            <div className='col-6 col-sm-6 col-md-6 text-center'>
                                <p>PRIVACY POLICY</p>
                                <p>Terms and Conditions</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
