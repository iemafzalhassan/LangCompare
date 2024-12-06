import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BookOpen, MessageSquare, LineChart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8" />
            <span className="font-bold text-xl">LangCompare</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/languages" className="flex items-center space-x-1 hover:text-indigo-200">
              <BookOpen className="h-5 w-5" />
              <span>Languages</span>
            </Link>
            <Link to="/reviews" className="flex items-center space-x-1 hover:text-indigo-200">
              <MessageSquare className="h-5 w-5" />
              <span>Reviews</span>
            </Link>
            <Link to="/trends" className="flex items-center space-x-1 hover:text-indigo-200">
              <LineChart className="h-5 w-5" />
              <span>Trends</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;