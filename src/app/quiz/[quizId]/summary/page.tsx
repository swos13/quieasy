import SummaryAnswers from "@/components/SummaryAnswers/SummaryAnswers";

interface ISummary {
  params: Promise<{ quizId: string }>;
}

export default async function Summary({ params }: ISummary) {
  const { quizId } = await params;

  console.log(quizId)
  return <SummaryAnswers />;
}
