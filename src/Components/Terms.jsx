import React from 'react'
import './Style/Terms.css'
import logo from "./images/Kriya_bg_remove.png"
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Whatsapp from './Whatsapp'

import Footer from './Footer'
const Terms = () => {
  return (
    <>
      <div className="terms">
        <Nav />
        <div className="main-banner">
          <h1>Terms and Conditions</h1>
          <div className="inner-terms">
            <div className="terms-1">
              <ul>
                <h3>1. Acceptance of Terms</h3>
                <li> <p>1.1 By accessing or using kriya ("the App"), you agree to comply with and be bound by these Terms and Conditions.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>2. User Registration</h3>
                <li> <br /><p>2.1 You may be required to register for an account with the App. You agree to provide accurate and complete information during the registration process.
                  <br /> <br />
                  2.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>3. User Conduct</h3>
                <li> <p>3.1 Users agree to use the App in compliance with all applicable laws and regulations.
                  <br />
                  3.2 Users agree not to engage in any conduct that could harm, disable, overburden, or impair the App.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>4. Content and Intellectual Property</h3>
                <li> <p>4.1 The App may contain content, including but not limited to text, graphics, images, and software. All such content is the intellectual property of kriya or its licensors.
                  <br />
                  4.2 Users may not modify, reproduce, distribute, or display any content from the App without explicit permission.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>5. Privacy Policy</h3>
                <li> <p>5.1 Use of the App is also governed by our Privacy Policy, which can be found <Link to='/privacypolicy'> Privacy Policy</Link>. By using the App, you agree to the terms outlined in the Privacy Policy.
                  <br />
                  5.2 Termination

                  Kriya reserves the right to terminate or suspend access to the App at any time, with or without cause, and with or without notice..</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>6. Disclaimers</h3>
                <li> <p>6.1 The App is provided "as is" and kriya makes no warranties, either express or implied, regarding the App, including but not limited to its fitness for a particular purpose, accuracy, or non-infringement.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>7. Limitation of Liability</h3>
                <li> <p>7.1 To the fullest extent permitted by applicable law, Kriya shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>8. Governing Law</h3>
                <li> <p>8.1 These Terms and Conditions shall be governed by and construed in accordance with the laws of Telangana Jurisdiction.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>9. Changes to Terms</h3>
                <li> <p>9.1 Kriya reserves the right to modify these Terms and Conditions at any time. Users are responsible for regularly reviewing the Terms. Continued use of the App after such modifications shall constitute acceptance of the modified Terms.</p></li>
              </ul>
            </div>

            <div className="terms-1">
              <ul>
                <h3>10. Contact Information</h3>
                <li> <p>10.1 For questions or concerns regarding these Terms and Conditions, please contact us at support@creatorsapp.in</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Whatsapp />
    </>
  )
}

export default Terms
