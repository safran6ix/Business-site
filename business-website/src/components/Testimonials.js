import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Smith',
            company: 'Tech Solutions Inc.',
            text: 'BusinessPro transformed our operations completely. Their strategic guidance helped us increase revenue by 40%.',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Sarah Johnson',
            company: 'Creative Agency',
            text: 'The team at BusinessPro is professional, knowledgeable, and truly cares about their clients success.',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            name: 'Michael Brown',
            company: 'StartUp Ventures',
            text: 'Thanks to BusinessPro, we were able to scale our business faster than we ever thought possible.',
            image: 'https://randomuser.me/api/portraits/men/3.jpg'
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;