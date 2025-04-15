import React, { useState } from 'react';
import './Contact.css';

const ContactForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Call parent function to handle form submission
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    alert('Thank you for reaching out!');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-info">
        Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new opportunities and ideas!
      </p>
      <ContactForm handleSubmit={handleFormSubmit} />
    </div>
  );
};

export default Contact;
