import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, RefreshCw } from 'lucide-react';
import { QuizState, QuizAnswer, LanguageRecommendation } from '../types/quiz';
import { quizQuestions } from '../data/quizQuestions';
import { languages } from '../data/languages';

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 0,
    answers: [],
    recommendations: []
  });

  const handleAnswer = (answer: string | string[]) => {
    const currentQuestion = quizQuestions[quizState.currentStep];
    const newAnswers = [...quizState.answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex].answer = answer;
    } else {
      newAnswers.push({
        questionId: currentQuestion.id,
        answer
      });
    }

    setQuizState((prev) => ({
      ...prev,
      answers: newAnswers
    }));
  };

  const generateRecommendations = (): LanguageRecommendation[] => {
    const recommendations: LanguageRecommendation[] = languages.map(language => {
      let score = 0;
      const reasons: string[] = [];

      // Analyze answers and calculate scores
      quizState.answers.forEach(answer => {
        switch (answer.questionId) {
          case 'experience':
            if (answer.answer === 'Beginner' && language.features.includes('Easy learning curve')) {
              score += 2;
              reasons.push('Great for beginners');
            }
            break;
          case 'project-type':
            if (language.category.includes(answer.answer as string)) {
              score += 3;
              reasons.push(`Well-suited for ${answer.answer}`);
            }
            break;
          case 'performance':
            if (answer.answer === 'Critical' && language.features.includes('High performance')) {
              score += 2;
              reasons.push('Excellent performance characteristics');
            }
            break;
        }
      });

      return {
        languageId: language.id,
        score,
        reasons
      };
    });

    return recommendations.sort((a, b) => b.score - a.score).slice(0, 3);
  };

  const handleNext = () => {
    if (quizState.currentStep === quizQuestions.length - 1) {
      const recommendations = generateRecommendations();
      setQuizState((prev) => ({
        ...prev,
        recommendations
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
    }
  };

  const handlePrevious = () => {
    setQuizState((prev) => ({
      ...prev,
      currentStep: prev.currentStep - 1
    }));
  };

  const handleRestart = () => {
    setQuizState({
      currentStep: 0,
      answers: [],
      recommendations: []
    });
  };

  const currentQuestion = quizQuestions[quizState.currentStep];
  const currentAnswer = quizState.answers.find(
    (a) => a.questionId === currentQuestion?.id
  );

  if (quizState.recommendations.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Your Recommended Languages</h2>
            <div className="space-y-6">
              {quizState.recommendations.map((rec, index) => {
                const language = languages.find(l => l.id === rec.languageId);
                return (
                  <div key={rec.languageId} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">
                        #{index + 1} {language?.name}
                      </h3>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Match Score: {rec.score}</span>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      {rec.reasons.map((reason, i) => (
                        <li key={i} className="text-gray-600">{reason}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleRestart}
              className="mt-8 flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Find Your Perfect Language</h2>
              <span className="text-gray-500">
                Question {quizState.currentStep + 1} of {quizQuestions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((quizState.currentStep + 1) / quizQuestions.length) * 100}%`
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl mb-4">{currentQuestion.text}</h3>
            <div className="space-y-4">
              {currentQuestion.type === 'single' && (
                <div className="space-y-2">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 text-left rounded-lg border ${
                        currentAnswer?.answer === option
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiple' && (
                <div className="space-y-2">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        const currentAnswers = (currentAnswer?.answer as string[]) || [];
                        const newAnswers = currentAnswers.includes(option)
                          ? currentAnswers.filter((a) => a !== option)
                          : [...currentAnswers, option];
                        handleAnswer(newAnswers);
                      }}
                      className={`w-full p-4 text-left rounded-lg border ${
                        (currentAnswer?.answer as string[])?.includes(option)
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'dropdown' && (
                <select
                  onChange={(e) => handleAnswer(e.target.value)}
                  value={currentAnswer?.answer as string || ''}
                  className="w-full p-4 rounded-lg border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  <option value="">Select an option</option>
                  {currentQuestion.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={quizState.currentStep === 0}
              className={`flex items-center px-4 py-2 rounded-md ${
                quizState.currentStep === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className={`flex items-center px-4 py-2 rounded-md ${
                !currentAnswer
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {quizState.currentStep === quizQuestions.length - 1 ? (
                'Get Recommendations'
              ) : (
                <>
                  Next
                  <ArrowRight className="h-5 w-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;