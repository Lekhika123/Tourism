import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const features = [
    {
      title: 'Explore Pilgrimage Sites',
      description: 'Discover India’s sacred destinations with detailed guides and nearby attractions.',
      link: '/pilgrimage',
    },
    {
      title: 'Prayer & Ritual Guides',
      description: 'Access step-by-step instructions for prayers and rituals at holy sites.',
      link: '/prayer-guide',
    },
    {
      title: 'Find Nearby Hotels',
      description: 'Book accommodations near your chosen pilgrimage sites with ease.',
      link: '/pilgrimage',
    },
    {
      title: 'Plan Your Journey',
      description: 'Create personalized itineraries for a seamless spiritual experience.',
      link: '/travel-planner',
    },
  ];

  const contactInfo = {
    email: 'support@pilgrimageapp.com',
    twitter: 'https://x.com/pilgrimageapp',
    instagram: 'https://instagram.com/pilgrimageapp',
  };

  return (
    <section className="min-h-screen bg-cream-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="About Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Our Pilgrimage App</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Empowering pilgrims to embark on spiritual journeys with comprehensive guides, prayer resources, and seamless planning tools.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our mission is to inspire and support pilgrims on their spiritual journeys across India’s sacred sites. We provide a comprehensive platform that combines detailed information about pilgrimage destinations, step-by-step prayer guides, and practical tools like hotel bookings and itinerary planning. Whether you’re visiting the Mahakaleshwar Temple or planning a Char Dham Yatra, our app is designed to make your spiritual experience seamless, meaningful, and enriching.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            What We Offer
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-[#f70000] scrollbar-track-gray-100">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group flex-shrink-0 w-64 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#f70000] group-hover:to-[#ffc400] group-hover:text-transparent group-hover:bg-clip-text">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            We are a passionate team of developers, designers, and spiritual enthusiasts dedicated to creating a platform that supports pilgrims worldwide. Our goal is to blend technology with spirituality to make sacred journeys accessible and fulfilling for everyone.
          </p>
          {/* Add team profiles if desired
          <div className="flex overflow-x-auto space-x-4 mt-6">
            <div className="flex-shrink-0 w-48 text-center">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-24 h-24 rounded-full mx-auto" />
              <p className="text-gray-800 font-semibold mt-2">John Doe</p>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>
            {/* Add more team members */}
          {/* </div> */}
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-4">
            Have questions or feedback? Reach out to us via email or follow us on social media for updates and inspiration.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-[#f70000] hover:text-[#ffc400] font-medium transition-colors duration-300"
            >
              {contactInfo.email}
            </a>
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f70000] hover:text-[#ffc400] font-medium transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f70000] hover:text-[#ffc400] font-medium transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-[#f70000] text-white px-6 py-3 rounded-full hover:bg-[#ffc400] transition-colors duration-300"
          >
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;