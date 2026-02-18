import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1>Grow Your Business With Us</h1>
                <p>We provide innovative solutions to help your business reach new heights.
                    Let us help you achieve your goals with our expert services.</p>
                <div className="hero-buttons">
                    <Link to="/contact" className="btn">Get Started</Link>
                    <Link to="/services" className="btn btn-secondary">Our Services</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;