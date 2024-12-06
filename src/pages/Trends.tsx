import React from 'react';
import { TrendingUp, ArrowUp } from 'lucide-react';
import { languageTrends } from '../data/trends';
import { categoryRankings } from '../data/categories';

const Trends: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="mr-2" />
            Top 10 Trending Languages
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {languageTrends.map((trend) => (
                <div key={trend.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold">#{trend.rank} {trend.id}</span>
                    <span className="text-green-600 flex items-center">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      {trend.growth}
                    </span>
                  </div>
                  <p className="text-gray-600">{trend.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {categoryRankings.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.languages.map((lang) => (
                  <div key={lang.languageId} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold">#{lang.rank} {lang.languageId}</span>
                      <p className="text-gray-600 mt-1">{lang.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;