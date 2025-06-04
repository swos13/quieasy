import { ThemeMode, QuizSaveState } from "@/lib/types";

let sessionStorage: Storage;
let localStorage: Storage;

if (typeof window !== "undefined") {
  sessionStorage = window.sessionStorage;
  localStorage = window.localStorage;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLocalItem(id: string, item: any) {
  localStorage.setItem(id, JSON.stringify(item));
}

export function getLocalItem(id: string) {
  const item = localStorage.getItem(id);
  if (item) return JSON.parse(item);
  return null;
}

export function saveQuizSession(quiz: QuizSaveState) {
  setSessionItem(`quiz-${quiz.id}`, quiz);
}

export function loadQuizSession(quizId: string): QuizSaveState {
  return getSessionItem(`quiz-${quizId}`);
}

export function saveTheme(theme: ThemeMode) {
  setLocalItem('theme', theme)
};

export function loadTheme() {
  return getLocalItem('theme');
}
