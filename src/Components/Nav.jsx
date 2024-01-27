import React, { useState } from 'react';
import logo from "./images/Kriya_bg_remove.png";
import appstore from './images/image.png'
import './Style/Nav.css';
import { Link } from 'react-router-dom';
import Helmets from './Helmet';
import { Modal, Button } from '@mui/material';

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    const [showWaitlistModal, setShowWaitlistModal] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const toggleWaitlistModal = () => {
        setShowWaitlistModal(!showWaitlistModal);
    };

    return (
        <>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <ul className={`nav-ul ${showNav ? 'hide' : ''}`}>
                    <li className='nav-li'><Link to='/'>Home</Link></li>
                    <li className='nav-li'><Link to='/collaboration'>Collaboration</Link></li>
                    <li className='nav-li'><Link to='/creators'>Creators</Link></li>
                    <li className='nav-li'><Link to='/contactus'>Contact Us</Link></li>
                    <li className='btn' onClick={toggleWaitlistModal}>Join Waitlist</li>
                </ul>
                <li className={`humbar ${showNav ? 'fixed' : ''}`} onClick={toggleNav}>
                    {showNav ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
                </li>
            </div>
            <nav className={showNav ? 'active' : ''}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Collab'>Collaboration</Link></li>
                    <li><Link to='/creators'>Creators</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
                <div className="stores">
                    <a href="https://play.google.com/store/apps/details?id=com.kriya.app" target='_blank'>
                        <img className='play-store' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                    </a>
                    <img className='app-store' src={appstore} alt="" />
                </div>
            </nav>

            <Modal
                open={showWaitlistModal}
                onClose={toggleWaitlistModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="waitlist-modal">
                    <Helmets />
                    {/* Add any additional content for the modal */}
                </div>
            </Modal>        </>
    );
}

export default Nav;
