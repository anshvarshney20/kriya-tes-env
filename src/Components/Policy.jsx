import React from 'react'
import './Style/Terms.css'
import logo from "./images/Kriya_bg_remove.png"
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Whatsapp from './Whatsapp'

const Terms = () => {
    return (
        <>
            <div className="terms">
               <Nav/>
                <div className="main-banner">
                    <h1>Privacy and Policy</h1>
                    <div className="inner-terms">
                        <div className="terms-1">
                            <ul>
                                <h3>1. Information We Collect</h3>
                                <li> <p>1.1 Personal Information: We may collect personal information, such as names, email addresses, and profile information when users register or use certain features of the app.
<br /><br />
1.2 Usage Data:We collect information on how users interact with the app, including but not limited to pages visited, features used, and time spent on the app.
<br /><br />
1.3 Device Information: We may collect information about the devices used to access the app, including device type, operating system, and unique device identifiers.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>2. How We Use the Information</h3>
                                <li> <p>2.1 Providing and Improving the App: We use the collected information to provide and enhance the features and functionalities of the app.
                                <br />                    <br />
2.2 Communication: We may use the provided email address to communicate with users, send updates, respond to inquiries, and send information about the app.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>3. Information Sharing and Disclosure</h3>
                                <li> <p>3.1 Third-Party Service Providers: We may share information with third-party service providers who assist us in operating the app and providing services. These service providers are obligated to maintain the confidentiality of the information.
                                <br /><br />
3.2 Legal Requirements: We may disclose information if required to do so by law or in the good-faith belief that such action is necessary to comply with applicable laws, regulations, or legal processes.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>4. Data Security</h3>
                                <li> <p>4.1 Security Measures: We implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of user data.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>5. User Choices</h3>
                                <li> <p>5.1 Opt-Out: Users may opt-out of receiving promotional emails by following the instructions in the email or contacting us directly.
                                <br /><br />
5.2 Access and Update: Users may access and update their personal information by logging into their account or contacting us directly.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>6. Children's Privacy</h3>
                                <li> <p>6.1 Age Limitation: The app is not intended for children under the age of 18. We do not knowingly collect or solicit personal information from children.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>7. Changes to the Privacy Policy</h3>
                                <li> <p>7.1 Notification: We reserve the right to modify this privacy policy at any time. Users will be notified of any changes via email or through a prominent notice on the app.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>8. Contact Information</h3>
                                <li> <p>8.1 Questions: If you have any questions about this privacy policy, please contact us at support@creatorsapp.in</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>10. Changes to Terms</h3>
                                <li> <p>10.1 Kriya reserves the right to modify these Terms and Conditions at any time. Users are responsible for regularly reviewing the Terms. Continued use of the App after such modifications shall constitute acceptance of the modified Terms.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>11. Contact Information</h3>
                                <li> <p>11.1 For questions or concerns regarding these Terms and Conditions, please contact us at support@creatorsapp.in</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Whatsapp/>
            <Footer/>
        </>
    )
}

export default Terms
