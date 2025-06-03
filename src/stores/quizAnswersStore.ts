import { Question } from "@/lib/types";
import { create } from "zustand";

export interface QuizAnswers {
  selectedAnswer: string | null;
  answers: string[];
  questions: Question[];
}

interface Action {
  setSelectedAnswer: (newSelectedAnswer: string | null) => void;
  setAnswers: (newAnswers: string[]) => void;
  addAnswer: (newAnswer: string) => void;
  setQuestions: (newQuestions: Question[]) => void;
}

export const useQuizAnswersStore = create<QuizAnswers & Action>((set) => ({
  selectedAnswer: null,
  answers: [],
  questions: [],

  setSelectedAnswer: (newSelectedAnswer: string | null) => set(() => ({ selectedAnswer: newSelectedAnswer })),
  setAnswers: (newAnswers: string[]) => set(() => ({ answers: newAnswers })),
  addAnswer: (newAnswer: string) =>
    set((state) => {
      const newAnswers = [...state.answers, newAnswer];
      return { answers: newAnswers };
    }),
  setQuestions: (newQuestions: Question[]) => set(() => ({ questions: newQuestions })),
}));
