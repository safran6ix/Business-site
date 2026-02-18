import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about">
            <div className="container about-content">
                <div className="about-text">
                    <h2>About BusinessPro</h2>
                    <p>With over 10 years of experience, we've helped hundreds of businesses
                        achieve their goals and exceed expectations. Our team of experts is
                        dedicated to providing the highest quality service and support.</p>
                    <p>We believe in building long-term relationships with our clients and
                        becoming true partners in their success.</p>
                    <Link to="/about" className="btn">Learn More About Us</Link>
                </div>
                <div className="about-stats">
                    <div className="stat">
                        <h3>500+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat">
                        <h3>10+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat">
                        <h3>50+</h3>
                        <p>Team Members</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;