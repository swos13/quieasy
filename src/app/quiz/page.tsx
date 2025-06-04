import QuestionsWrapper from "@/components/QuestionsWrapper/QuestionsWrapper";
import { getQuestions } from "@/tools/api";
import { extractFilterParams } from "@/tools/helpers";

interface QuizProps {
  searchParams: URLSearchParams;
}

export default async function Quiz({ searchParams }: QuizProps) {
  const data = await searchParams;
  const params = new URLSearchParams(data);

  let loadFromStorage = false;
  const isNew = params.get("isNew") === "true";
  const quizId = params.get("quizId");

  if (!isNew) {
    loadFromStorage = true;
  }

  //TODO: throw 404 error and handle it
  if(!quizId) throw new Error();

  const questions = await getQuestions(extractFilterParams(params).toString());

  return <QuestionsWrapper questions={questions} loadFromStorage={loadFromStorage} quizId={quizId} isNew={isNew} />;
}