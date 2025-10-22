
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API)
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600">Your message has been sent. We'll be in touch shortly.</p>
            </div>
        </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{fontFamily: "'Playfair Display', serif"}}>Let's Create Magic Together</h2>
           <div className="mt-6 text-gray-600">
                <p className="flex items-center justify-center space-x-2">
                    <i className="fas fa-phone"></i>
                    <span>9580881049</span>
                </p>
                <p className="flex items-center justify-center space-x-2 mt-2">
                    <i className="fab fa-instagram"></i>
                    <span>@krishna_studio-air</span>
                </p>
            </div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            I'm excited to hear about your wedding plans! Fill out the form below, and I'll get back to you within 48 hours.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>
          <div className="mb-6">
             <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Wedding Date (optional)"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Tell me about your wedding..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;