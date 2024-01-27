import React, { useState, useEffect } from 'react';
import './Style/Creator.css';
import { db } from '../../firebase-config';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import Whatsapp from './Whatsapp';

const Creator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [creatorsPerPage] = useState(3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const creatorsCollection = collection(db, 'profile_user');
        const snapshot = await getDocs(creatorsCollection);
        const creatorsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCreators(creatorsData);
        setLoading(false);

        let loadingProgress = 0;
        const increment = 100 / creatorsData.length;
        for (let i = 0; i < creatorsData.length; i++) {
          loadingProgress += increment;
          setProgress(loadingProgress);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchCreators();
  }, []);

  const indexOfLastCreator = currentPage * creatorsPerPage;
  const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
  const currentCreators = creators.slice(indexOfFirstCreator, indexOfLastCreator);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  const filteredCreators = creators.filter((creator) =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCreators.length / creatorsPerPage);

  return (
    <>
      <Nav />
      <div className="creator-main">
        <h1>Our Creators</h1>
        <br />
        <div className="creator-inner">
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input
              placeholder="Search"
              type="search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <br />
          <div className="creator-box">
            {currentCreators.map((creator) => (
              creator.displayParam && (
                <div className="creator" key={creator.id}>
                  <Link to={`/${creator.username}`}>
                    <img src={creator.image} alt="" />
                    <br />
                    <br />
                    <h3>{creator.name}</h3>
                    <h5>{creator.bio}</h5>
                  </Link>
                </div>
              )
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
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
    </>
  )
}



export default Creator
