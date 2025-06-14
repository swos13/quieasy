import { QuestionData } from "@/lib/types";
import { extractQuestion } from "./helpers";

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

export async function getQuestions(searchQuery: string) {
  const questions = await fetchData(searchQuery);

  return questions.map((question: QuestionData) => extractQuestion(question));;
}
