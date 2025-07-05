import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function StatePage() {
    // Mock data for worship places (replace with API call in production)
const worshipPlaces = [
  { id: 1, name: "Taj Mahal", state: "Uttar Pradesh", religion: "Islam", address: "Agra, Uttar Pradesh" },
  { id: 2, name: "Golden Temple", state: "Punjab", religion: "Sikhism", address: "Amritsar, Punjab" },
  { id: 3, name: "Tirupati Balaji", state: "Andhra Pradesh", religion: "Hinduism", address: "Tirupati, Andhra Pradesh" },
  { id: 4, name: "St. Mary's Basilica", state: "Karnataka", religion: "Christianity", address: "Bengaluru, Karnataka" },
  { id: 5, name: "Jain Temple", state: "Rajasthan", religion: "Jainism", address: "Udaipur, Rajasthan" },
];

// Mock data for sidebar links
const topSearches = [
  { id: 'taj-mahal', name: 'Taj Mahal', path: '/place/taj-mahal', color: 'bg-gradient-to-r from-[#0088f7] to-[#6200ff]' },
  { id: 'golden-temple', name: 'Golden Temple', path: '/place/golden-temple', color: 'bg-gradient-to-r from-[#f70000] to-[#ffc400]' },
  { id: 'tirupati', name: 'Tirupati Balaji', path: '/place/tirupati-balaji', color: 'bg-gradient-to-r from-[#00f700] to-[#00ffdd]' },
];

const hiddenGems = [
  { id: 'kailasa', name: 'Kailasa Temple', path: '/place/kailasa-temple', color: 'bg-gradient-to-r from-[#9400f7] to-[#2600ff]' },
  { id: 'haji-ali', name: 'Haji Ali Dargah', path: '/place/haji-ali-dargah', color: 'bg-gradient-to-r from-[#f70000] to-[#ff00b3]' },
  { id: 'parasnath', name: 'Parasnath Jain Temple', path: '/place/parasnath-jain-temple', color: 'bg-gradient-to-r from-[#0088f7] to-[#6200ff]' },
];

// Reusing quickLinks from Home.jsx for Other Activities
const quickLinks = [
  { id: 'char-dham', name: 'Char Dham Yatra', path: '/activity/char-dham', color: 'bg-gradient-to-r from-[#0088f7] to-[#6200ff]' },
  { id: 'vaishno-devi', name: 'Vaishno Devi', path: '/activity/vaishno-devi', color: 'bg-gradient-to-r from-[#f70000] to-[#ffc400]' },
  { id: 'amarnath', name: 'Amarnath Yatra', path: '/activity/amarnath', color: 'bg-gradient-to-r from-[#00f700] to-[#00ffdd]' },
  { id: 'jagannath', name: 'Jagannath Puri', path: '/activity/jagannath', color: 'bg-gradient-to-r from-[#9400f7] to-[#2600ff]' },
  { id: 'kailash-parvat', name: 'Kailash Parvat', path: '/activity/kailash-parvat', color: 'bg-gradient-to-r from-[#f70000] to-[#ff00b3]' },
];

// List of Indian states
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// List of religions
const religions = [
  "Hinduism", "Islam", "Christianity", "Sikhism", "Jainism", "Buddhism", "Others"
];
  const [selectedState, setSelectedState] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter worship places based on state and religion
  useEffect(() => {
    if (!selectedState && !selectedReligion) {
      setResults(worshipPlaces.slice(0, 3)); // Show first 3 as placeholder
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const filtered = worshipPlaces.filter(place =>
        (!selectedState || place.state === selectedState) &&
        (!selectedReligion || place.religion === selectedReligion)
      );
      setResults(filtered);
      setLoading(false);
    }, 500); // Simulate network delay
  }, [selectedState, selectedReligion]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-20 pt-16 md:pt-20`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold bg-gradient-to-t from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
            Explore
          </h2>

          {/* Top Searches */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Top Searches</h3>
            <ul className="space-y-2">
              {topSearches.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`${item.color} text-white font-semibold px-4 py-2 rounded-2xl hover:brightness-90 hover:scale-105 transition duration-200 block text-center border-2 border-amber-300`}
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hidden Gems */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Hidden Gems</h3>
            <ul className="space-y-2">
              {hiddenGems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`${item.color} text-white font-semibold px-4 py-2 rounded-2xl hover:brightness-90 hover:scale-105 transition duration-200 block text-center border-2 border-amber-300`}
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Activities */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Other Activities</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`${item.color} text-white font-semibold px-4 py-2 rounded-2xl hover:brightness-90 hover:scale-105 transition duration-200 block text-center border-2 border-amber-300`}
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow md:ml-64">
        
        <div className="pt-20 pb-16 px-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold bg-gradient-to-t from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4">
              Search Worship Places
            </h2>

            {/* Search Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  Select State
                </label>
                <select
                  id="state"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                  Select Religion
                </label>
                <select
                  id="religion"
                  value={selectedReligion}
                  onChange={(e) => setSelectedReligion(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Religions</option>
                  {religions.map((religion) => (
                    <option key={religion} value={religion}>{religion}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Section */}
            {loading ? (
              <div className="text-center">
                <p className="text-lg">Loading...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center">
                <p className="text-lg">No worship places found for this selection.</p>
                <p className="text-gray-600">Try selecting a different state or religion.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((place) => (
                  <div key={place.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold">{place.name}</h3>
                    <p className="text-gray-600">{place.address}</p>
                    <p className="text-gray-600">Religion: {place.religion}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Initial Placeholder */}
            {!selectedState && !selectedReligion && !loading && (
              <div className="text-center mt-6">
                <p className="text-lg text-gray-600">
                  Select a state and religion to find worship places in India.
                </p>
                <p className="text-sm text-gray-500">
                  Explore popular worship places below or check the sidebar for more options!
                </p>
              </div>
            )}
          </div>
        </div>

        
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default StatePage;