import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data (replace with backend API call in production)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = {
    email: 'support@pilgrimageapp.com',
    twitter: 'https://x.com/pilgrimageapp',
    instagram: 'https://instagram.com/pilgrimageapp',
  };

  const faqs = [
    {
      question: 'How do I plan a pilgrimage using the app?',
      answer: 'Visit our <a href="/pilgrimage" class="text-[#f70000] hover:text-[#ffc400]">Pilgrimage</a> page to explore sacred sites and use the <a href="/travel-planner" class="text-[#f70000] hover:text-[#ffc400]">Travel Planner</a> to create a personalized itinerary.',
    },
    {
      question: 'Where can I find prayer guides?',
      answer: 'Check out our <a href="/prayer-guide" class="text-[#f70000] hover:text-[#ffc400]">Prayer Guide</a> page for step-by-step instructions on rituals and prayers.',
    },
    {
      question: 'How can I share my pilgrimage story?',
      answer: 'Submit your experience on our <a href="/stories" class="text-[#f70000] hover:text-[#ffc400]">Stories</a> page to inspire other pilgrims.',
    },
  ];

  return (
    <section className="min-h-screen bg-cream-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Contact Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Have questions or feedback about your spiritual journey? Reach out to us, and let’s make your pilgrimage experience seamless.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-800 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 bg-cream-100 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f70000] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-800 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 bg-cream-100 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f70000] transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-800 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 bg-cream-100 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f70000] transition-colors"
                  rows="5"
                  placeholder="Your message or inquiry"
                />
              </div>
              <button
                type="submit"
                className="bg-[#f70000] text-white px-6 py-3 rounded-full hover:bg-[#ffc400] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details & FAQs */}
          <div>
            {/* Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
                Contact Details
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Reach out to us directly or follow us for updates and inspiration.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#f70000] hover:text-[#ffc400] transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p>
                  <strong>Twitter:</strong>{' '}
                  <a
                    href={contactInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f70000] hover:text-[#ffc400] transition-colors duration-300"
                  >
                    @pilgrimageapp
                  </a>
                </p>
                <p>
                  <strong>Instagram:</strong>{' '}
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f70000] hover:text-[#ffc400] transition-colors duration-300"
                  >
                    @pilgrimageapp
                  </a>
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/95 backdrop-blur-sm p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;