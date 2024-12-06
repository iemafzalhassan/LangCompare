export interface QuizQuestion {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'dropdown' | 'custom';
  options?: string[];
  dependsOn?: string;
  condition?: string;
}

export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
}

export interface LanguageRecommendation {
  languageId: string;
  score: number;
  reasons: string[];
}

export interface QuizState {
  currentStep: number;
  answers: QuizAnswer[];
  recommendations: LanguageRecommendation[];
}