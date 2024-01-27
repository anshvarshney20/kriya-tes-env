import React from 'react'
import logo from "./images/Kriya_bg_remove.png"
import Nav from './Nav'
import img1 from "./images/person_1.jpg"
import img2 from "./images/footer-1image.png/"
import video1 from "./images/kriyavideo.mp4"
import { BrowserRouter, Routes, Router, } from 'react-router-dom'
import Terms from "./Terms"
import { Link } from 'react-router-dom'
import './Style/Home.css'
import Footer from './Footer'
import Whatsapp from './Whatsapp'
import { useEffect } from 'react';
import { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




const Home = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play();
        }
    }, []);


    return (
        <>
            <div className="loader">
                <div className="loadingio-spinner-dual-ball-4t24rchwmu">
                    <div className="ldio-x5jinkz8sc">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="main">
                <Nav />
                <div className="top-section">
                    <div className="top-inner">
                        <div className="t-l">
                            <h1><div className="first-t-s">Introducing <span>K</span><span>R</span><span>I</span><span>Y</span><span>A</span>,<br /></div>
                                The World's First Creators Revolution App</h1>

                            <p>Enabling seamless communication to present your self in a genuine, enjoyable and lucrative way
                                with limitless revenue.</p>
                                <a className="top-a-btn" target='_blank' href="https://play.google.com/store/apps/details?id=com.kriya.app"> 
                                 <button className="btn first-btn">
                                <span className="transition"></span>
                                <span className="gradient"></span>
                                <span className="label">Get Started</span>
                            </button> </a>
                        </div>
                        <div className="t-r">
                            <div className="top-pic">

                            </div>

                        </div>
                    </div>
                </div>
                <div className="about-app" id="about">

                    <h1>Your Every <span>Minute Counts</span></h1>
                    <div className="about-app-inner">
                        <div className="about-l">
                        <video ref={videoRef} src={video1} autoPlay muted loop></video>
                        </div>
                        <div className="about-r">
                            <h3>
                                <p><span>Kriya</span> is an app that emphasizes the value of every minute for its users by
                                    offering
                                    chat, call,
                                    and video call services on a minute-by-minute basis. </p>
                                <p><br />The tagline <span> "Your Every Minute
                                    Counts"</span> <br />
                                    effectively communicates the app's focus <br /> on the importance and significance of each moment
                                    for
                                    its users. </p><br />This tagline suggests that Kriya is designed to make every minute
                                meaningful and
                                valuable for its users Check Out App and Save Your Every Minute.
                            </h3>
                        </div>
                    </div>
                    {/* <div className="cards-step">
                        <div className="cards-inner">
                            <div className="card">
                                <h5>0 1</h5>
                                <h2>Sign up</h2>
                                <p>Sign up quickly using your mobile number or by creating an account, connecting you with your
                                    users.</p>
                            </div>
                            <div className="card">
                                <h5>0 2</h5>
                                <h2>Create Profile</h2>
                                <p>Craft Your Identity with Kriya <br /> Create your profille and let your <br />unique voice be
                                    heard in every minute.</p>
                            </div>
                            <div className="card">
                                <h5>0 3</h5>
                                <h2>Enjoy the app</h2>
                                <p>Experience pure enjoyment with limitless earnings Your go-to app for
                                    entertainment and relaxation.</p>
                            </div>
                        </div>
                        <button className="btn">Go to app</button>
                    </div> */}
                </div>


                <div className="two-about-banner">
                    <div className="about-second">
                        <div className="about-second-inner first-inner">
                            <div className="a-s-l">
                                <h2>Seamlessly Communicate</h2>
                                <p className='f-aslp'>Seamlessly communicate with Kriya, where every moment sparks connection. With our
                                    user-friendly interface, enjoy chat, voice, and video calls effortlessly. Transform your
                                    conversations into meaningful experiences, minute by minute</p>
                                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.kriya.app"> <button className="btn a-s-l-button" >Download</button> </a>
                            </div>
                            <div className="a-s-r">
                            </div>
                        </div>
                    </div>

                    <div className="about-second">
                        <div className="about-second-inner second-inner">
                            <div className="a-s-r s-about-img">
                            </div>
                            <div className="a-s-l">
                                <h2>Gather Feedback</h2>
                                <p className='aslp'>Gather valuable insights with Kriya! Your feedback fuels our evolution, ensuring anunparalleled communication experience. Share your thoughts, shape the future of connectivity with us.</p>
                                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.kriya.app"> <button className="btn a-s-l-button">Download</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="review-section">
                    <div className="review-inner">
                        <h1>Review From Our Users</h1>
                        <p className="r-p"> <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star black-star">&#9733;</span>
                        </p>
                        <div className="review">
                            <h3>Excellent App!</h3>
                            <p>I'm thrilled with the transformative experience Kriya has brought to my communication. The
                                minute-based billing system is a game-changer, allowing me to pay only for what I use. The
                                crystal-clear calls and user-friendly interface make connecting with friends and colleagues a
                                joy. Kriya has become an essential part of my daily interactions, and I can't
                                recommend it enough!</p>
                            <img src={img1} alt="" />
                            <h5>Khushi, — App User</h5>
                        </div>
                    </div>
                </div>


                <div className="app-downlaod" id="app">
                    <h1>Start Enjoying Your Time, <div> Download
                        <span className='kriya-gap'><span>K</span><span>R</span><span>I</span><span>Y</span><span>A</span> </span>Now!
                    </div>
                    </h1>

                    <div className="app-inner">

                        <div className="a-l">
                            {/* <img src={img2} alt="" /> */}
                        </div>
                        <div className="a-r">
                            <div className="buttons">
                               <a target='_blank' href="https://play.google.com/store/apps/details?id=com.kriya.app"> <div className="btn"><i className="fa-brands fa-google-play"></i>Play Store</div></a>
                                <div id='down-btn' className="btn"><i className="fa-brands fa-app-store"></i>App Store</div>
                            </div>
                        </div>
                    </div>



                    <svg
                        id="wave"
                        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
                        viewBox="0 0 1440 220"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                                <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                                <stop stopColor="rgba(243.936, 243.936, 243.936, 1)" offset="100%" />
                            </linearGradient>
                        </defs>
                        <path
                            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                            fill="url(#sw-gradient-0)"
                            d="M0,176L80,150.3C160,125,320,73,480,73.3C640,73,800,125,960,124.7C1120,125,1280,73,1440,73.3C1600,73,1760,125,1920,143C2080,161,2240,147,2400,124.7C2560,103,2720,73,2880,84.3C3040,95,3200,147,3360,165C3520,183,3680,169,3840,168.7C4000,169,4160,183,4320,179.7C4480,176,4640,154,4800,154C4960,154,5120,176,5280,183.3C5440,191,5600,183,5760,165C5920,147,6080,117,6240,113.7C6400,110,6560,132,6720,121C6880,110,7040,66,7200,73.3C7360,81,7520,139,7680,150.3C7840,161,8000,125,8160,124.7C8320,125,8480,161,8640,179.7C8800,198,8960,198,9120,165C9280,132,9440,66,9600,55C9760,44,9920,88,10080,95.3C10240,103,10400,73,10560,73.3C10720,73,10880,103,11040,106.3C11200,110,11360,88,11440,77L11520,66L11520,220L11440,220C11360,220,11200,220,11040,220C10880,220,10720,220,10560,220C10400,220,10240,220,10080,220C9920,220,9760,220,9600,220C9440,220,9280,220,9120,220C8960,220,8800,220,8640,220C8480,220,8320,220,8160,220C8000,220,7840,220,7680,220C7520,220,7360,220,7200,220C7040,220,6880,220,6720,220C6560,220,6400,220,6240,220C6080,220,5920,220,5760,220C5600,220,5440,220,5280,220C5120,220,4960,220,4800,220C4640,220,4480,220,4320,220C4160,220,4000,220,3840,220C3680,220,3520,220,3360,220C3200,220,3040,220,2880,220C2720,220,2560,220,2400,220C2240,220,2080,220,1920,220C1760,220,1600,220,1440,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
                        ></path>
                    </svg>
                </div>
                <Whatsapp />

                <Footer />
            </div>
        </>
    )
}

export default Home
