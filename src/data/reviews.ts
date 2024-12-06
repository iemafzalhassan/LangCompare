import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'python-review-1',
    languageId: 'python',
    rating: 5,
    author: 'Sarah Chen',
    date: '2024-03-15',
    comment: 'Python has been my go-to language for data science and machine learning projects. The ecosystem is unmatched.',
    pros: [
      'Extensive data science libraries',
      'Clear and readable syntax',
      'Great community support',
      'Rich documentation'
    ],
    cons: [
      'Can be slower than compiled languages',
      'GIL limitations for threading',
      'Package management can be confusing'
    ],
    useCase: 'Data Science & Machine Learning'
  },
  {
    id: 'javascript-review-1',
    languageId: 'javascript',
    rating: 4,
    author: 'Mark Thompson',
    date: '2024-03-14',
    comment: 'JavaScript is essential for modern web development, but its quirks can sometimes be challenging.',
    pros: [
      'Ubiquitous in web development',
      'Large ecosystem of libraries',
      'Flexible and versatile',
      'Great for async programming'
    ],
    cons: [
      'Type coercion issues',
      'Legacy baggage',
      'Too many ways to do the same thing'
    ],
    useCase: 'Web Development'
  }
];