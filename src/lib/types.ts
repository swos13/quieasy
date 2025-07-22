export type ThemeMode = "light" | "dark";

export type Question = {
  category: string;
  text: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

export type QuestionType = "" | "text_choice" | "image_choice";

export type Difficulty = "" | "easy" | "medium" | "hard";

export interface QuestionFilters {
  limit: number;
  categories?: number;
  type?: QuestionType;
  difficulty: Difficulty;
}

export interface QuestionData {
  type: string;
  difficulty: string;
  category: string;
  question: { text: string };
  correctAnswer: string;
  incorrectAnswers: string[];
  tags: string[];
}

export interface Quiz {
  id: string,
  questions: Question[]
}
export interface DailyQuiz {
  id: string,
  questions: Question[],
  date: string
}

export interface QuizSaveState extends Quiz {
  current: number,
  answers: string[]
}

export interface QuizSummary {
  id: string,
  questions: Question[],
  answers: string[]
}