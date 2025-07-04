import React from "react";
import {Link} from 'react-router-dom'
const FeaturedDestinationCard = ({ id, title, description, imageUrl, tags, distance, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 max-w-sm mx-4 mb-6">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-saffron mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <p className="text-gray-500 text-sm mb-2">{distance}</p>
        <p className="text-yellow-500 text-sm mb-4">Rating: {rating}/5</p>
        <Link
          to={""}
          className="inline-block bg-gradient-to-r from-[#f70000] to-[#ffc400] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDestinationCard;