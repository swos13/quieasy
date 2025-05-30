import { QuizSaveState } from "@/lib/types";

let sessionStorage: Storage;

if (typeof window !== "undefined") {
  sessionStorage = window.sessionStorage;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setSessionItem(id: string, item: any) {
  sessionStorage.setItem(id, JSON.stringify(item));
}

export function getSessionItem(id: string) {
  const item = sessionStorage.getItem(id);
  if (item) return JSON.parse(item);
  return null;
}

export function saveQuizSession(quiz: QuizSaveState) {
  setSessionItem(`quiz-${quiz.id}`, quiz);
}

export function loadQuizSession(quizId: string): QuizSaveState {
  return getSessionItem(`quiz-${quizId}`);
}
