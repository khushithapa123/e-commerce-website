import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'

const Navitems = () => {
    const [menuToggle, setMenuToogle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    //addevent lisnter
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false)
        }
    })
    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top d-mb-none ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    {/* <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3'><span>Create account</span></Link>
                        <Link to="/login">Log In</Link>
                    </div> */}
                </div>
            </div>

            {/* //header bottom */}

            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to="/">
                                    <img src={logo} />
                                </Link>
                            </div>

                            {/* //menuarea */}


                        </div>

                        {/* menu area */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            {/* sign in */}

                            <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Log In</Link>


                            {/* menutoggle */}
                            <div onClick={() => setMenuToogle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>

                            {/* socailtogl */}
                             <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialTogglex``)}>
                             <i className="icofont-info-square"></i>
                             </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navitems