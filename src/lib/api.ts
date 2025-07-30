import { Difficulty, QuestionData, QuestionType } from "@/lib/types";
import { createSearchParams, extractQuestion } from "../tools/helpers";

export const fetchData = async (paramsString: string = "limit=10") => {
  try {
    const response = await fetch(`${process.env.API_URL}questions?${paramsString}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

export async function getQuestionsBySearchQuery(searchQuery: string) {
  const questions = await fetchData(searchQuery);

  return questions.map((question: QuestionData) => extractQuestion(question));;
}

export async function getQuestions(limit: number = 10, categories?: string[], difficulties?: Difficulty[], types?: QuestionType[]) {
  const questions = await fetchData(createSearchParams(limit, categories, difficulties, types).toString());

  return questions.map((question: QuestionData) => extractQuestion(question));;
}