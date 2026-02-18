import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us. We will get back to you soon!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        });
    };

    return (
        <div className="page contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info-box">
                            <h2>Let's Connect</h2>
                            <p>We're here to help and answer any questions you might have.
                                We look forward to hearing from you.</p>

                            <div className="info-item">
                                <h3>📍 Visit Us</h3>
                                <p>123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                            </div>

                            <div className="info-item">
                                <h3>📞 Call Us</h3>
                                <p>+1 (555) 123-4567<br />Mon-Fri 9am-6pm EST</p>
                            </div>

                            <div className="info-item">
                                <h3>✉️ Email Us</h3>
                                <p>info@businesspro.com<br />support@businesspro.com</p>
                            </div>
                        </div>

                        <form className="contact-form-large" onSubmit={handleSubmit}>
                            <h2>Send a Message</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h2>Find Us</h2>
                    <div className="map-placeholder">
                        {/* Add Google Maps iframe here */}
                        <div style={{
                            background: '#f0f0f0',
                            height: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <p>Google Maps Integration</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;