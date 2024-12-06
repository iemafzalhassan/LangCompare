import { CategoryRanking } from '../types';

export const categoryRankings: CategoryRanking[] = [
  {
    category: 'Web Development',
    description: 'Languages commonly used for building web applications',
    languages: [
      { languageId: 'javascript', rank: 1, reason: 'Universal browser support and vast ecosystem' },
      { languageId: 'typescript', rank: 2, reason: 'Type safety and enhanced developer experience' },
      { languageId: 'python', rank: 3, reason: 'Popular for backend development with Django and Flask' },
      { languageId: 'php', rank: 4, reason: 'Powers many CMS and enterprise applications' },
      { languageId: 'ruby', rank: 5, reason: 'Rapid development with Ruby on Rails' }
    ]
  },
  {
    category: 'Web3/Blockchain',
    description: 'Languages used in blockchain and decentralized applications',
    languages: [
      { languageId: 'solidity', rank: 1, reason: 'Primary language for Ethereum smart contracts' },
      { languageId: 'rust', rank: 2, reason: 'Used in Solana and other high-performance blockchains' },
      { languageId: 'go', rank: 3, reason: 'Popular for building blockchain infrastructure' }
    ]
  },
  {
    category: 'Operating Systems',
    description: 'Languages used in operating system development',
    languages: [
      { languageId: 'c', rank: 1, reason: 'Standard for kernel and low-level system development' },
      { languageId: 'cpp', rank: 2, reason: 'Used in system components and drivers' },
      { languageId: 'rust', rank: 3, reason: 'Growing adoption for safe systems programming' }
    ]
  },
  {
    category: 'Mobile Development',
    description: 'Languages for mobile app development',
    languages: [
      { languageId: 'kotlin', rank: 1, reason: 'Primary language for Android development' },
      { languageId: 'swift', rank: 2, reason: 'Primary language for iOS development' },
      { languageId: 'dart', rank: 3, reason: 'Used with Flutter for cross-platform development' }
    ]
  }
];