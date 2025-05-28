import { Difficulty, Question, QuestionData, QuestionType } from "@/lib/types";

export function createSearchParams(limit: number = 10, categories?: string[], difficulties?: Difficulty[], types?: QuestionType[]) {
  const params = new URLSearchParams();
  params.append("limit", limit.toString());
  if (categories && categories.length > 0) params.append("categories", categories.toString());
  if (difficulties && difficulties.length > 0) params.append("difficulties", difficulties.toString());
  if (types && types.length > 0) params.append("type", types.toString());

  return params.toString();
}

export function extractQuestion(questionDataObject: QuestionData): Question {
  return {
    text: cleanText(questionDataObject.question),
    category: questionDataObject.category,
    correctAnswer: questionDataObject.correct_answer,
    incorrectAnswers: questionDataObject.incorrect_answers,
  };
}

export function cleanText(text: string){
  return text.replaceAll("&#039;", "'").replaceAll("&quot;", '"');
}
