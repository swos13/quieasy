import { Question } from "@/lib/types";
import { create } from "zustand";

export interface QuizAnswers {
  quizId: string | null;
  selectedAnswer: string | null;
  answers: string[];
  questions: Question[];
}

interface Action {
  setQuizId: (newQuizId: string) => void;
  setSelectedAnswer: (newSelectedAnswer: string | null) => void;
  setAnswers: (newAnswers: string[]) => void;
  addAnswer: (newAnswer: string) => void;
  setQuestions: (newQuestions: Question[]) => void;
  reset: () => void;
}

const initialState = {
  quizId: null,
  selectedAnswer: null,
  answers: [],
  questions: [],
}

export const useQuizAnswersStore = create<QuizAnswers & Action>((set) => ({
  ...initialState,

  setQuizId: (newQuizId: string) => set(() => ({ quizId: newQuizId })),
  setSelectedAnswer: (newSelectedAnswer: string | null) => set(() => ({ selectedAnswer: newSelectedAnswer })),
  setAnswers: (newAnswers: string[]) => set(() => ({ answers: newAnswers })),
  addAnswer: (newAnswer: string) =>
    set((state) => {
      const newAnswers = [...state.answers, newAnswer];
      return { answers: newAnswers };
    }),
  setQuestions: (newQuestions: Question[]) => set(() => ({ questions: newQuestions })),
  reset: () => set(initialState)
}));
