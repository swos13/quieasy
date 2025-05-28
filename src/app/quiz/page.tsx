import QuestionsWrapper from "@/components/QuestionsWrapper/QuestionsWrapper";
import { getQuestions } from "@/tools/api";

interface QuizProps {
  searchParams: URLSearchParams;
}

export default async function Quiz({ searchParams }: QuizProps) {
  const data = await searchParams;
  const params = new URLSearchParams(data).toString();
  const questions = await getQuestions(params.toString());

  return (
    <QuestionsWrapper questions={questions} />
  );
}
