import { Difficulty, Question, QuestionData, QuestionType } from "@/lib/types";

export function createSearchParams(limit: number = 10, categories?: string[], difficulties?: Difficulty[], types?: QuestionType[]) {
  const params = new URLSearchParams();
  params.append("limit", limit.toString());
  if (categories && categories.length > 0 && categories[0] !== '') params.append("categories", categories.toString());
  if (difficulties && difficulties.length > 0 && difficulties[0] !== '') params.append("difficulties", difficulties.toString());
  if (types && types.length > 0 && types[0] !== '') params.append("type", types.toString());

  return params.toString();
}

export function extractQuestion(questionDataObject: QuestionData): Question {
  return {
    text: questionDataObject.question.text,
    category: questionDataObject.category,
    correctAnswer: questionDataObject.correctAnswer,
    incorrectAnswers: questionDataObject.incorrectAnswers,
  };
}
