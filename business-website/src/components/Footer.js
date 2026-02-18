import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Business<span>Pro</span></h3>
                        <p>Your trusted partner in business growth and digital transformation.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="contact-info">
                            <li><EnvelopeIcon /> info@businesspro.com</li>
                            <li><PhoneIcon /> +1 (555) 123-4567</li>
                            <li><MapPinIcon /> New York, NY 10001</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 BusinessPro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;