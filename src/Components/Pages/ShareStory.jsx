import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import worshipPlacesData from '../../data/ModifiedData.json';

function Stories() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    story: '',
    siteId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data (replace with backend API call in production)
    console.log('Story submitted:', formData);
    // Reset form
    setFormData({ name: '', location: '', story: '', siteId: '' });
    alert('Thank you for sharing your story! It will be reviewed and added soon.');
  };

  // Sample stories data
  const stories = [
    {
      id: 'story1',
      name: 'Anita Sharma',
      location: 'Delhi, India',
      story: 'Visiting Mahakaleshwar Temple was a transformative experience. The early morning aarti filled my heart with peace, and the vibrant energy of Ujjain was unforgettable.',
      siteId: 'mahakaal',
      siteName: 'Mahakaleshwar Temple',
    },
    {
      id: 'story2',
      name: 'Rahul Patel',
      location: 'Mumbai, India',
      story: 'The trek to Vaishno Devi was challenging but deeply rewarding. The sense of devotion and camaraderie among pilgrims made it truly special.',
      siteId: 'vaishno-devi',
      siteName: 'Vaishno Devi Temple',
    },
    {
      id: 'story3',
      name: 'Priya Jain',
      location: 'Ahmedabad, India',
      story: 'Exploring the Jain temples was a journey of self-discovery. The serene atmosphere and intricate architecture left me in awe.',
      siteId: 'jain-temple',
      siteName: 'Jain Temple',
    },
  ];

  return (
    <section className="min-h-screen bg-[#FDF6E3] font-sans">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gray-800">
        <img
          src='https://img.freepik.com/premium-photo/portrait-beautiful-cinematic-shot-ram-mandir-ayodhya_849906-13652.jpg?w=900'
          alt="Stories Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Share Your Sacred Journey</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Connect with fellow pilgrims by sharing your spiritual experiences. Your story can light the way for others.
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAsMTQwQzAsMTQwIDMyMCw0MCA2NDAsNDBjMzIwLDAsNjQwLDEwMCw2NDAsMTAwSDB6IiBmaWxsPSIjRkRGNkUzIi8+PC9zdmc+')] bg-repeat-x bg-bottom"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submission Form */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF6F61] to-[#FFD700] text-transparent bg-clip-text mb-4">
              Tell Your Story
            </h2>
            <form className="space-y-4 bg-[#FFF8DC] p-6 rounded-lg border border-[#F4A261]" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-[#FF6F61] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 bg-white border border-[#F4A261] rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="location" className="text-[#FF6F61] font-semibold">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 bg-white border border-[#F4A261] rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-colors"
                  placeholder="Your city, country"
                />
              </div>
              <div>
                <label htmlFor="siteId" className="text-[#FF6F61] font-semibold">
                  Pilgrimage Site (Optional)
                </label>
                <select
                  id="siteId"
                  name="siteId"
                  value={formData.siteId}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 bg-white border border-[#F4A261] rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-colors"
                >
                  <option value="">Select a site (optional)</option>
                  {worshipPlacesData.religious_places.map((site) => (
                    <option key={site.id} value={site.id}>
                      {site.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="story" className="text-[#FF6F61] font-semibold">
                  Your Story
                </label>
                <textarea
                  id="story"
                  name="story"
                  value={formData.story}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 bg-white border border-[#F4A261] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-colors"
                  rows="5"
                  placeholder="Share your pilgrimage experience..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6F61] to-[#FFD700] text-white px-6 py-3 rounded-full hover:from-[#FFD700] hover:to-[#FF6F61] transition-colors duration-300"
              >
                Submit Story
              </button>
            </form>
          </div>

          {/* Stories List */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF6F61] to-[#FFD700] text-transparent bg-clip-text mb-4">
              Community Stories
            </h2>
            <div className="space-y-6">
              {stories.length > 0 ? (
                stories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-[#FFF8DC] p-6 rounded-lg border-b-4 border-[#F4A261] border-opacity-50 hover:bg-[#FFE4B5] transition-colors duration-300"
                    style={{
                      borderBottomImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAsMTQwQzAsMTQwIDMyMCw0MCA2NDAsNDBjMzIwLDAsNjQwLDEwMCw2NDAsMTAwSDB6IiBmaWxsPSIjRjRBMjYxIiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==")',
                      borderBottomWidth: '24px',
                      borderBottomStyle: 'solid',
                    }}
                  >
                    <h3 className="text-lg font-semibold text-[#FF6F61]">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.location}</p>
                    {story.siteId && (
                      <p className="text-sm mt-1">
                        <Link
                          to={`/worship-place/${story.siteId}`}
                          className="text-[#FF6F61] hover:text-[#FFD700] transition-colors duration-300"
                        >
                          {story.siteName}
                        </Link>
                      </p>
                    )}
                    <p className="text-gray-700 text-sm mt-2 line-clamp-3">{story.story}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center py-12">
                  No stories yet. Be the first to share your experience!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;