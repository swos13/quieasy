"use client";

interface ISummaryAnswers {
  summary: QuizSummary
}

import { QuizSummary } from "@/lib/types";
import { useQuizAnswersStore } from "@/stores/quizAnswersStore";

export default function SummaryAnswers({summary}: ISummaryAnswers) {
  const answers = useQuizAnswersStore((state) => state.answers);

    console.log(answers);

  return <div>{summary.answers.map((answer, index) => <div key={index}>{index+1}. {answer}</div>)}</div>;
}
