'use client';

import { Question as IQuestion } from "@/lib/types";
import { useState } from "react";
import Question from "../Question/Question";
import { Button } from "@mui/material";

interface IQuestionsWrapper {
  questions: IQuestion[];
}

const QuestionsWrapper = ({ questions }: IQuestionsWrapper) => {
  const [currentQuestion, setCurrentQuestion] = useState({ number: 0, question: questions[0] });
  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => ({ number: prev.number + 1, question: questions[prev.number + 1] }));
  };
  return (
    <div>
      <Question {...currentQuestion.question} />
      <Button onClick={handleNextQuestion}>Next</Button>
    </div>
  );
};

export default QuestionsWrapper;
