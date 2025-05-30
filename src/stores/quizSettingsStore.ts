import { Difficulty, QuestionType } from "@/lib/types";
import { create } from "zustand";

export interface QuizSettings {
  limit: number;
  categories: string[];
  types: QuestionType[];
  difficulties: Difficulty[];
}

interface Action {
  changeLimit: (newLimit: number) => void;
  updateCategories: (newCategory: string) => void;
  updateTypes: (newType: QuestionType) => void;
  updateDifficulties: (newDifficulty: Difficulty) => void;
}

function updateSettingsArray<T>(previousArray: T[], newValue: T) {
  if (newValue === "") return ["" as T];
  const newArray = previousArray.includes(newValue)
    ? previousArray.filter((value) => value !== newValue)
    : previousArray[0] === ""
    ? [newValue]
    : [...previousArray, newValue];
  return newArray;
}

export const useQuizSettingsStore = create<QuizSettings & Action>((set) => ({
  limit: 10,
  categories: [""],
  types: [""],
  difficulties: [""],

  changeLimit: (newLimit: number) => set(() => ({ limit: newLimit })),
  updateCategories: (newCategory: string) => set((state) => ({ categories: updateSettingsArray(state.categories, newCategory) })),
  updateTypes: (newType: QuestionType) => set((state) => ({ types: updateSettingsArray(state.types, newType) })),
  updateDifficulties: (newDifficulty: Difficulty) => set((state) => ({ difficulties: updateSettingsArray(state.difficulties, newDifficulty) })),
}));
