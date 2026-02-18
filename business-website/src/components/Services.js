import React from 'react';
import { Link } from 'react-router-dom';
import {
    ChartBarIcon,
    ComputerDesktopIcon,
    MegaphoneIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

const Services = () => {
    const services = [
        {
            icon: <ChartBarIcon />,
            title: 'Business Strategy',
            description: 'Strategic planning and consulting to optimize your business operations.'
        },
        {
            icon: <ComputerDesktopIcon />,
            title: 'Digital Transformation',
            description: 'Modernize your business with cutting-edge technology solutions.'
        },
        {
            icon: <MegaphoneIcon />,
            title: 'Marketing & SEO',
            description: 'Reach more customers with our comprehensive marketing strategies.'
        },
        {
            icon: <UserGroupIcon />,
            title: 'Team Training',
            description: 'Empower your team with professional development and training.'
        }
    ];

    return (
        <section className="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="services-cta">
                    <Link to="/services" className="btn">View All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default Services;