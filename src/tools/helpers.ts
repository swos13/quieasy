import { Difficulty, Question, QuestionData, QuestionType } from "@/lib/types";

export function createSearchParams(amount: number = 10, category?: number, difficulty?: Difficulty | "", type?: QuestionType | "") {
  const params = new URLSearchParams();
  params.append("amount", amount.toString());
  if (category) params.append("category", category.toString());
  if (difficulty) params.append("difficulty", difficulty);
  if (type) params.append("type", type);

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
