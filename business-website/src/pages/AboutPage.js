import React from 'react';

const AboutPage = () => {
    return (
        <div className="page about-page">
            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Learn more about our story and values</p>
                </div>
            </section>

            <section className="about-story">
                <div className="container">
                    <h2>Our Story</h2>
                    <p>Founded in 2014, BusinessPro started with a simple mission: to help businesses
                        achieve their full potential through innovative strategies and dedicated support.
                        What began as a small consulting firm has grown into a comprehensive business
                        solutions provider serving clients across the globe.</p>
                    <p>Our journey has been marked by continuous learning, adaptation, and a unwavering
                        commitment to our clients' success. We've had the privilege of working with
                        startups, small businesses, and established enterprises, helping them navigate
                        challenges and seize opportunities.</p>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <h2>Our Leadership Team</h2>
                    <div className="team-grid">
                        {/* Add team members here */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;