import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, desc, image, tag1, tag2, btnLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag2}
        </span>
        <Link to={btnLink} className="bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mt-4 inline-block">
          Chat Now ➡️
        </Link>
      </div>
    </div>
  );
};

export default Card;
