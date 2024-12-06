import { Language } from '../types';

export const languages: Language[] = [
  {
    id: 'python',
    name: 'Python',
    description: 'A versatile, high-level programming language known for its simplicity and readability. Popular in data science, AI, web development, and automation.',
    paradigms: ['Object-oriented', 'Imperative', 'Functional', 'Procedural'],
    yearCreated: 1991,
    creator: 'Guido van Rossum',
    features: [
      'Dynamic typing',
      'Automatic memory management',
      'Comprehensive standard library',
      'Rich ecosystem of packages',
      'Easy integration with C/C++',
      'Built-in testing framework'
    ],
    popularity: 95,
    imageUrl: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&q=80&w=1000',
    rank: 1,
    category: ['Data Science', 'Web Development', 'AI/ML', 'Automation'],
    useCases: [
      'Machine Learning and AI',
      'Data Analysis and Visualization',
      'Web Development (Django, Flask)',
      'Scientific Computing',
      'Automation and Scripting'
    ],
    maintainedBy: 'Python Steering Council',
    license: 'PSF License',
    githubStars: 45000,
    stackOverflowQuestions: 1800000,
    officialWebsite: 'https://www.python.org'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'The language of the web, enabling interactive and dynamic content in browsers. Now also popular for server-side development.',
    paradigms: ['Object-oriented', 'Functional', 'Event-driven', 'Prototype-based'],
    yearCreated: 1995,
    creator: 'Brendan Eich',
    features: [
      'First-class functions',
      'Prototypal inheritance',
      'Event-driven programming',
      'JSON support',
      'Async/await',
      'Rich DOM API'
    ],
    popularity: 98,
    imageUrl: 'https://images.unsplash.com/photo-1632882765546-1ee75f53becb?auto=format&fit=crop&q=80&w=1000',
    rank: 2,
    category: ['Web Development', 'Frontend', 'Backend', 'Mobile'],
    useCases: [
      'Frontend Web Development',
      'Server-side Development (Node.js)',
      'Mobile Development (React Native)',
      'Desktop Applications (Electron)',
      'Browser Extensions'
    ],
    maintainedBy: 'ECMA International',
    license: 'MIT',
    githubStars: 178000,
    stackOverflowQuestions: 2200000,
    officialWebsite: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript, adding optional static types, classes, and modules.',
    paradigms: ['Object-oriented', 'Functional', 'Static typing'],
    yearCreated: 2012,
    creator: 'Microsoft',
    features: [
      'Static typing',
      'ECMAScript compatibility',
      'Object-oriented features',
      'Generics',
      'Type inference',
      'Decorators'
    ],
    popularity: 88,
    imageUrl: 'https://images.unsplash.com/photo-1622151834677-70f982c9adef?auto=format&fit=crop&q=80&w=1000',
    rank: 3,
    category: ['Web Development', 'Frontend', 'Backend'],
    useCases: [
      'Large-scale JavaScript applications',
      'Enterprise software development',
      'Angular development',
      'Node.js applications',
      'Type-safe APIs'
    ],
    maintainedBy: 'Microsoft',
    license: 'Apache 2.0',
    githubStars: 85000,
    stackOverflowQuestions: 650000,
    officialWebsite: 'https://www.typescriptlang.org'
  }
];