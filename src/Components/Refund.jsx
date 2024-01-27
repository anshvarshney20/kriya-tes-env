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
                    <h1>Cancellation & Refund Policy</h1>
                    <div className="inner-terms">
<br />
<br />
<br />

                        <p className='risk-p'>At Iconic Kriya LLP, we strive to provide a seamless and satisfactory experience for our users. Please read our cancellation and refund policy carefully to understand your rights and responsibilities.

Cancellation & Refund Policy:</p>
                        <div className="terms-1">
                            <ul>
                                <h3>Cancellation & Refund Policy:</h3>
                                <li> <p>1.1. Refunds for Technical Issues: If a user experiences technical issues resulting in the inability to use Kriya, we will conduct a thorough investigation. If the issue is attributed to Kriya's technical shortcomings, we may offer a refund or compensation at our discretion.
<br /><br />
1.2. Refunds for Service Disruptions: In the event of service disruptions or outages that significantly impact the user experience, we will assess the impact and may provide refunds or compensation on a case-by-case basis.
<br /><br />
1.3. Refunds for In-App Purchases: For in-app purchases such as additional minutes or premium features, refunds will only be issued if there is a clear and documented case of a technical error or unauthorized transaction. Users must contact our support team with relevant details for review.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>Refund Request Process:</h3>
                                <li> <p>2.1. Contacting Support: Users seeking a refund must contact our customer support team through the app or our official support channels.
                                <br /><br />
2.2. Providing Information: Users requesting a refund must provide detailed information about the issue, including transaction details, date and time of the problem, and any relevant screenshots or documentation.
<br /><br />
2.3. Investigation Period: Our support team will conduct a thorough investigation into the refund request. Users will be notified of the decision within a reasonable timeframe.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>Non-Refundable Circumstances:</h3>
                                <li> <p>3.1. Change of Mind: Refunds will not be issued for cases where users have changed their minds, no longer wish to use the app, or have misunderstood the minute-based charging system.</p></li>
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
                                <h3>Policy Updates:</h3>
                                <li> <p>Kriya reserves the right to update or modify this cancellation and refund policy at any time. Users will be notified of any changes, and the updated policy will be effective immediately upon notification.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>Contact Information:</h3>
                                <li> <p>For any inquiries or assistance regarding cancellations and refunds, users can contact our customer support team at support@creatorsapp.in</p></li>
                            </ul>
                        </div>
                    </div>
                    <p className='risk-p'>This cancellation and refund policy is designed to be fair and transparent, providing clarity on the circumstances under which refunds may be issued while ensuring the responsible use of the Kriya app.</p>
                </div>
            </div>
            <Whatsapp/>
            <Footer/>
        </>
    )
}

export default Terms
