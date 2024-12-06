import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { Star } from 'lucide-react';

interface LanguageCardProps {
  language: Language;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language }) => {
  return (
    <Link to={`/languages/${language.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src={language.imageUrl} 
          alt={language.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{language.name}</h3>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-gray-600">{language.popularity}%</span>
            </div>
          </div>
          <p className="mt-2 text-gray-600">{language.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {language.paradigms.map((paradigm) => (
              <span
                key={paradigm}
                className="px-2 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full"
              >
                {paradigm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LanguageCard;