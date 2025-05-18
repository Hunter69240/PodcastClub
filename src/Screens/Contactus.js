import React, { useState } from 'react';
import './Contactus.css';
// Import your Header and Footer components
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
     
      <Header />

      <div className="contact-container">
        <h2>Contact Us</h2>
        {submitted && <p className="success-message">Thank you for contacting us!</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name<span>*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email<span>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number<span>*</span></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contactus;
