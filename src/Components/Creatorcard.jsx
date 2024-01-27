
import React from 'react';
import Nav from './Nav';
import './Style/Creatorcard.css';
import imgk from './images/Kriya_bg_remove.png';
import SignupModal from './SignupModal';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Creatorcard() {
    const { username } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [creators, setcreators] = useState("")
    const handleSignupClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        async function fetchData() {
            const docRef = doc(db, "profile_user", username);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();
            setcreators(data);
            setImageLoading(false); // Mark image loading as complete
        }

        fetchData();
    }, [username]);
    // Find the creator with the matching username
    

    return (
        <>
            <a href="/">
                <div className="k-logo">
                    <img className="k-img" src={imgk} alt="" />
                    <a href="#" onClick={handleSignupClick}>
                        <div className="btn tr-c-btn">Get Your Creator Card</div>
                    </a>
                </div>
            </a>
            <div className="creator-main">
                <img className="img1" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/84bf84f610945949aed140ac/xxxx.png" alt="" />
                <img className="img2" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8abf9708500f530fa3cb6308/jjjjjjjjjjjjjjjjjjj.png" alt="" />
                <img className="img3" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/ec8b1fdcd0475a01b686162e/ddd-min.png" alt="" />
                <div className="c-card-inner">
                    <div className="card">
                        <img src={creators.image} alt="" />
                        <div className="creator-n">
                            <h2>{creators.name}</h2>
                            <h3>{creators.bio}</h3>
                        </div>
                        <div className="social-icons">
                            <i class="c-linkdin fa-brands fa-linkedin"></i>
                            <i class="c-x fa-brands fa-x-twitter"></i>
                            <i class="c-insta fa-brands fa-instagram"></i>
                            <i class="c-facebook fa-brands fa-facebook"></i>
                        </div>
                        <div className="buttons  creator-b">
                            <a target='_blank' href="https://play.google.com/store/apps/details?id=com.kriya.app"> <div className="btn"><i className="fa-brands fa-google-play"></i>Play Store</div></a>
                            <a href="#">  <div className="btn cr-c-btn"><i className="fa-brands fa-app-store"></i>App Store</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <SignupModal open={isModalOpen} onClose={handleCloseModal} />

        </>
    );
}

export default Creatorcard;
