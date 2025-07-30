import { Difficulty, Question, QuestionData, QuestionType, QuizSummary } from "@/lib/types";

export function createSearchParams(limit: number = 10, categories?: string[], difficulties?: Difficulty[], types?: QuestionType[]) {
  const params = new URLSearchParams();
  params.append("limit", limit.toString());
  if (categories && categories.length > 0 && categories[0] !== '') params.append("categories", categories.toString());
  if (difficulties && difficulties.length > 0 && difficulties[0] !== '') params.append("difficulties", difficulties.toString());
  if (types && types.length > 0 && types[0] !== '') params.append("type", types.toString());

  return params.toString();
}

export function extractFilterParams(params: URLSearchParams){
  const filterParamsNames = ['limit', 'categories', 'difficulties', 'types'];
  const filterParams = new URLSearchParams();

  filterParamsNames.forEach(paramName => {
    if(params.has(paramName)) filterParams.set(paramName, params.get(paramName)!);
  })

  return filterParams;

}

export function extractQuestion(questionDataObject: QuestionData): Question {
  return {
    text: questionDataObject.question.text,
    category: questionDataObject.category,
    correctAnswer: questionDataObject.correctAnswer,
    incorrectAnswers: questionDataObject.incorrectAnswers,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shuffleArray(array: Array<any>) {
   const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function generateQuizUUID() {
  return crypto.randomUUID();
}

export function countCorrectAnswers(summary: QuizSummary) {
  return summary.questions.reduce((sum, question, index) => sum += question.correctAnswer === summary.answers[index] ? 1 : 0, 0)
}

export function isValidDateFormat(date: string) {
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  return regex.test(date);
}