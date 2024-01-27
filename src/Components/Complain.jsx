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
                    <h1>Risk and Compliance</h1>
                    <div className="inner-terms">
                        <div className="terms-1">
                            <ul>
                                <h3>1. Privacy and Data Security:</h3>
                                <li> <p>Risk: Unauthorized access or data breaches leading to the exposure of sensitive user information.

                                    Compliance Measures: Implement robust encryption protocols for data in transit and at rest. Regularly conduct security audits and vulnerability assessments. Comply with relevant data protection regulations such as GDPR, CCPA, etc.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>2. Payment Security:</h3>
                                <li> <p>Risk: Payment transactions being compromised, leading to financial losses and damage to user trust.

                                    Compliance Measures: Utilize secure payment gateways with industry-standard encryption. Comply with Payment Card Industry Data Security Standard (PCI DSS) requirements. Regularly monitor and audit payment processes for vulnerabilities.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>3. Regulatory Compliance:</h3>
                                <li> <p>Risk: Failure to comply with local, regional, or international regulations related to communication services and data privacy.

                                    Compliance Measures: Stay informed about and adhere to telecommunications and data protection regulations. Establish legal counsel to ensure ongoing compliance with evolving laws.

                                </p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>4. User Authentication and Authorization:</h3>
                                <li> <p>Risk: Unauthorized access to user accounts leading to misuse or manipulation of the platform.

                                    Compliance Measures: Implement strong authentication mechanisms, including multi-factor authentication. Regularly update and audit access control policies to ensure only authorized users have appropriate permissions.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>5. Service Interruptions:</h3>
                                <li> <p>Risk: Unplanned service downtime affecting user experience and satisfaction.

                                    Compliance Measures:Implement redundant server systems and failover mechanisms. Conduct regular load testing and capacity planning to ensure scalability.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>6. Legal Risks from User Communications:</h3>
                                <li> <p>Risk: Users engaging in illegal or inappropriate activities through Kriya.

                                    Compliance Measures:Develop and enforce clear content guidelines and acceptable use policies. Implement reporting mechanisms for users to flag inappropriate content. Cooperate with law enforcement authorities when required.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>7. Financial Risks:</h3>
                                <li> <p>Risk: Insufficient revenue generation leading to financial instability.

                                    Compliance Measures:Implement a sound financial strategy that includes diversification of revenue streams. Regularly review and adjust pricing strategies based on market conditions and user feedback.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>9. Customer Support and Conflict Resolution:</h3>
                                <li> <p>Risk: Inadequate customer support leading to dissatisfaction and negative reviews.

                                    Compliance Measures:Implement a responsive customer support system. Develop clear processes for conflict resolution and user issue escalation.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>10. Ethical Use:</h3>
                                <li> <p>Risk: Kriya being used for unethical purposes or enabling harmful communication.

                                    Compliance Measures:Establish and communicate ethical guidelines for app use. Monitor user activities for potential misuse and take appropriate action.</p></li>
                            </ul>
                        </div>

                        <div className="terms-1">
                            <ul>
                                <h3>11. Accessibility Compliance:</h3>
                                <li> <p>Risk: Exclusion of users with disabilities due to lack of accessibility features.

                                    Compliance Measures:Ensure the app is compliant with accessibility standards (e.g., WCAG). Conduct regular accessibility audits and user testing.</p></li>
                            </ul>
                        </div>
                        <div className="terms-1">
                            <ul>
                                <h3>12. Continuous Monitoring and Auditing:</h3>
                                <li> <p>Risk: Failing to identify and address emerging risks due to inadequate monitoring.

                                    Compliance Measures:Implement continuous monitoring systems for security, compliance, and user behavior. Conduct regular internal and external audits to assess adherence to policies and regulations.</p></li>
                            </ul>
                        </div>
                        <p className='risk-p'>This Risk & Compliance framework for Kriya aims to create a secure, ethical, and compliant environment, fostering user trust and ensuring the long-term success of the application. Regular updates and adjustments should be made to adapt to evolving risks and regulatory landscapes.</p>
                    </div>
                </div>
            </div>
            <Footer/>
            <Whatsapp/>
        </>
    )
}

export default Terms
