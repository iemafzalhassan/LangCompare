export interface Language {
  id: string;
  name: string;
  description: string;
  paradigms: string[];
  yearCreated: number;
  creator: string;
  features: string[];
  popularity: number;
  imageUrl: string;
  rank: number;
  category: string[];
  useCases: string[];
  maintainedBy: string;
  license: string;
  githubStars?: number;
  stackOverflowQuestions?: number;
  officialWebsite: string;
}

export interface Review {
  id: string;
  languageId: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
  pros: string[];
  cons: string[];
  useCase: string;
}

export interface CategoryRanking {
  category: string;
  description: string;
  languages: {
    languageId: string;
    rank: number;
    reason: string;
  }[];
}