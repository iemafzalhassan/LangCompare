import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'experience',
    text: 'What is your programming experience level?',
    type: 'single',
    options: ['Beginner', 'Intermediate', 'Advanced']
  },
  {
    id: 'project-type',
    text: 'What type of project do you want to build?',
    type: 'dropdown',
    options: [
      'Web Application',
      'Mobile App',
      'Data Science/ML',
      'Game Development',
      'System Programming',
      'Desktop Application',
      'Blockchain/Web3',
      'DevOps/Automation'
    ]
  },
  {
    id: 'project-purpose',
    text: 'What is the main purpose of your project?',
    type: 'dropdown',
    options: [
      'Personal Project',
      'Professional Work',
      'Startup/Business',
      'Educational',
      'Open Source Contribution'
    ]
  },
  {
    id: 'performance',
    text: 'How important is performance for your project?',
    type: 'single',
    options: ['Critical', 'Important', 'Nice to have', 'Not important']
  },
  {
    id: 'ecosystem',
    text: 'What aspects of the ecosystem are most important to you?',
    type: 'multiple',
    options: [
      'Large Package Library',
      'Strong Type System',
      'Good Documentation',
      'Active Community',
      'Enterprise Support',
      'Easy Learning Curve'
    ]
  }
];