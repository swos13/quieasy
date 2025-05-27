import { getQuestions } from "@/tools/helpers";

interface QuizProps {
  searchParams: URLSearchParams;
}

export default async function Quiz({ searchParams }: QuizProps) {
  const data = await searchParams;
  const params = new URLSearchParams(data).toString();
  const questions = await getQuestions(params.toString());

  console.log(questions);

  return <h1>Quiz</h1>;
}
