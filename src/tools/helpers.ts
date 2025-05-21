import { Difficulty, QuestionType } from "@/app/lib/types";
import { fetchData } from "./api";

export function createSearchParams(amount: number = 10, category?: number, difficulty?: Difficulty | "", type?: QuestionType | "") {
  const params = new URLSearchParams();
  params.append("amount", amount.toString());
  if (category) params.append("category", category.toString());
  if (difficulty) params.append("difficulty", difficulty);
  if (type) params.append("type", type);

  return createSearchParams.toString();
}

export async function getQuestions(searchQuery: string) {
  const data = await fetchData(searchQuery);
  const questions = data.results;
  return questions;
}
