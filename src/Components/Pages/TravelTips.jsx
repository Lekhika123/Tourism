import React from 'react';
import { Link } from 'react-router-dom';

function TravelTips() {
  const tipsCategories = [
    {
      category: 'Packing for Your Pilgrimage',
      tips: [
        {
          title: 'Pack Light, Comfortable Clothing',
          description: 'Choose breathable, modest clothing suitable for temple visits, such as cotton kurtas or salwar kameez. Include a scarf or shawl for covering your head in certain shrines.',
        },
        {
          title: 'Bring Comfortable Footwear',
          description: 'Opt for durable, comfortable shoes or sandals, as many pilgrimage sites require walking or removing footwear. Consider slip-on shoes for convenience.',
        },
        {
          title: 'Carry Essential Items',
          description: 'Pack a small backpack with water, snacks, a first-aid kit, and personal items like prayer books or a journal. Check our <a href="/prayer-guide" class="text-[#f70000] hover:text-[#ffc400]">Prayer Guide</a> for ritual-specific items.',
        },
      ],
    },
    {
      category: 'Temple Etiquette',
      tips: [
        {
          title: 'Dress Modestly',
          description: 'Wear clothing that covers shoulders and knees. Avoid leather items (e.g., belts, bags) as they are prohibited in many temples.',
        },
        {
          title: 'Respect Sacred Spaces',
          description: 'Remove shoes before entering temples, maintain silence during prayers, and avoid touching idols unless permitted. Follow local customs for offerings.',
        },
        {
          title: 'Photography Guidelines',
          description: 'Check for photography restrictions before taking pictures. Some sites prohibit cameras or flash photography inside sanctuaries.',
        },
      ],
    },
    {
      category: 'Safety Tips',
      tips: [
        {
          title: 'Stay Hydrated and Safe',
          description: 'Carry a reusable water bottle and stay hydrated, especially during long walks or hot weather. Avoid street food if you have a sensitive stomach.',
        },
        {
          title: 'Secure Your Belongings',
          description: 'Use a money belt or secure bag to protect valuables. Be cautious in crowded areas like temple festivals or markets.',
        },
        {
          title: 'Travel Insurance',
          description: 'Consider travel insurance for medical emergencies or trip cancellations. Keep emergency contact numbers handy.',
        },
      ],
    },
    {
      category: 'Seasonal Planning',
      tips: [
        {
          title: 'Choose the Right Time',
          description: 'Plan your pilgrimage during cooler months (October–March) for comfort, especially for outdoor sites like Vaishno Devi or Amarnath. Check our <a href="/pilgrimage" class="text-[#f70000] hover:text-[#ffc400]">Pilgrimage</a> page for site-specific details.',
        },
        {
          title: 'Avoid Peak Crowds',
          description: 'Visit popular sites during off-peak times (e.g., early mornings) to avoid crowds and enjoy a peaceful experience.',
        },
        {
          title: 'Check Weather Conditions',
          description: 'Monitor weather forecasts, especially for high-altitude sites like Kailash Parvat. Pack layers for unpredictable weather.',
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-cream-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Travel Tips Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Travel Tips for Pilgrims</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Prepare for a seamless and meaningful pilgrimage with our expert tips on packing, etiquette, safety, and seasonal planning.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            Plan a Seamless Spiritual Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Embarking on a pilgrimage is a deeply enriching experience. Our travel tips are designed to help you prepare, stay safe, and respect sacred traditions, ensuring a fulfilling journey. Whether you’re visiting Mahakaleshwar Temple or planning a Char Dham Yatra, these guidelines will make your trip smooth and memorable.
          </p>
        </div>

        {/* Tips Sections */}
        {tipsCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.tips.map((tip, tipIndex) => (
                <div key={tipIndex} className="bg-white/95 backdrop-blur-sm p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
                  <p
                    className="text-gray-600 text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: tip.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call-to-Action Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            Start Your Pilgrimage
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Ready to plan your spiritual journey? Explore sacred sites, create an itinerary, or learn sacred rituals to make your pilgrimage unforgettable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/pilgrimage"
              className="bg-[#f70000] text-white px-6 py-3 rounded-full hover:bg-[#ffc400] transition-colors duration-300"
            >
              Explore Pilgrimage Sites
            </Link>
            <Link
              to="/travel-planner"
              className="bg-[#f70000] text-white px-6 py-3 rounded-full hover:bg-[#ffc400] transition-colors duration-300"
            >
              Plan Your Trip
            </Link>
            <Link
              to="/prayer-guide"
              className="bg-[#f70000] text-white px-6 py-3 rounded-full hover:bg-[#ffc400] transition-colors duration-300"
            >
              Learn Prayers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelTips;