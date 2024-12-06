import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Code, Users, GitBranch, ExternalLink } from 'lucide-react';
import { languages } from '../data/languages';
import { reviews } from '../data/reviews';

const LanguageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const language = languages.find(lang => lang.id === id);
  const languageReviews = reviews.filter(review => review.languageId === id);

  if (!language) {
    return <div>Language not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64">
            <img 
              src={language.imageUrl}
              alt={language.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-4xl font-bold text-white">{language.name}</h1>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">Rank #{language.rank}</span>
              </div>
              <div className="flex items-center">
                <Code className="h-5 w-5 text-gray-500" />
                <span className="ml-1">Created in {language.yearCreated}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="ml-1">Maintained by {language.maintainedBy}</span>
              </div>
              {language.githubStars && (
                <div className="flex items-center">
                  <GitBranch className="h-5 w-5 text-gray-500" />
                  <span className="ml-1">{language.githubStars.toLocaleString()} stars</span>
                </div>
              )}
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">{language.description}</p>

              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <ul className="list-disc pl-6 mb-6">
                {language.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-3">Use Cases</h3>
              <ul className="list-disc pl-6 mb-6">
                {language.useCases.map((useCase, index) => (
                  <li key={index} className="text-gray-600">{useCase}</li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 mb-6">
                <a
                  href={language.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Official Website
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Community Reviews</h2>
            <div className="space-y-6">
              {languageReviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-semibold">{review.author}</span>
                      <span className="text-gray-500 ml-2">{review.date}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{review.comment}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                      <ul className="list-disc pl-5">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="text-gray-600">{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                      <ul className="list-disc pl-5">
                        {review.cons.map((con, index) => (
                          <li key={index} className="text-gray-600">{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetail;