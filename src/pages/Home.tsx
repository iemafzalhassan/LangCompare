import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Users, BookOpen, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Find Your Perfect Programming Language
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-indigo-200 sm:text-2xl md:mt-5 md:max-w-3xl">
              Compare, learn, and choose the right programming language for your next project.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/languages"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
              >
                Explore Languages
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-500 md:py-4 md:text-lg md:px-10"
              >
                Take Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code2 className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Language Comparison</h3>
              <p className="mt-2 text-gray-600">Compare features, performance, and use cases of different languages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Community Reviews</h3>
              <p className="mt-2 text-gray-600">Read real experiences from developers worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Learning Resources</h3>
              <p className="mt-2 text-gray-600">Access curated tutorials and documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Industry Trends</h3>
              <p className="mt-2 text-gray-600">Stay updated with the latest programming trends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;