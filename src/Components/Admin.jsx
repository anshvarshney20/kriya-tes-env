import React, { useState } from 'react';
import './Style/Admin.css';
import img1 from './images/conatct-img.jpg';
import img2 from './images/contact-img2.jpg';
import { useUserAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const cookies = new Cookies()
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await logIn(email, password);
      cookies.set('auth', 'loggedIn', { path: '/' });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login-main">
        <div className="login-inner">
          <img className='l-img1' src={img1} alt="" />
          <img className='l-img2' src={img2} alt="" />

          <div className="login-box">
            <div className="login-r">
              <form onSubmit={handleLogin}>
                {error && <div className="error-message">{error}</div>}
                <div className="input-e">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter Your Email or Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-e">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className='admin-btn btn' type='submit' disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <h4>Forget Password</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
