import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const services = [
        {
            title: 'Business Strategy',
            description: 'Comprehensive strategic planning to optimize your business operations and maximize growth potential.',
            features: ['Market Analysis', 'Competitive Strategy', 'Growth Planning', 'Risk Management']
        },
        {
            title: 'Digital Transformation',
            description: 'Modernize your business with cutting-edge technology solutions and digital processes.',
            features: ['Cloud Solutions', 'Automation', 'Digital Workflows', 'Tech Integration']
        },
        {
            title: 'Marketing & SEO',
            description: 'Reach more customers and increase visibility with our comprehensive marketing strategies.',
            features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics']
        },
        {
            title: 'Team Training',
            description: 'Empower your team with professional development and comprehensive training programs.',
            features: ['Leadership Training', 'Skill Development', 'Workshops', 'Mentoring']
        },
        {
            title: 'Financial Consulting',
            description: 'Expert financial guidance to help you make informed decisions and maximize profitability.',
            features: ['Financial Planning', 'Budget Optimization', 'Investment Strategy', 'Cash Flow Management']
        },
        {
            title: 'IT Support',
            description: 'Reliable technical support and infrastructure management for your business.',
            features: ['24/7 Support', 'Network Security', 'Data Backup', 'System Maintenance']
        }
    ];

    return (
        <div className="page services-page">
            <section className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive solutions for your business needs</p>
                </div>
            </section>

            <section className="services-list">
                <div className="container">
                    <div className="services-grid-detailed">
                        {services.map((service, index) => (
                            <div key={index} className="service-detailed-card">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn">Get Started</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;