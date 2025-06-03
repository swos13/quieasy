"use client";

import { useQuizAnswersStore } from "@/stores/quizAnswersStore";

export default function SummaryAnswers() {
  const answers = useQuizAnswersStore((state) => state.answers);

    console.log(answers);

  return <div>{answers.map((answer, index) => <div key={index}>{index+1}. {answer}</div>)}</div>;
}
