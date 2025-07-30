"use client";

import { Quiz } from "@/lib/types";
import { getLocalItem } from "@/tools/storage";
import { useEffect, useState } from "react";

interface IQuizClientWrapper {
  dailyId?: string;
}

export default function QuizClientWrapper({ dailyId }: IQuizClientWrapper) {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (dailyId) {
      const isCompleted = getLocalItem(dailyId);
      if (!isCompleted) {
        //TODO: change to call route handler to get the daily quiz data
        console.log(quiz);
        setQuiz(null);
      }
      setShowSummary(isCompleted);
      setIsLoading(false);
    }
  }, [dailyId]);

  return <div>{isLoading ? <span>Loading...</span> : showSummary ? <div>Summary</div> : <div>Daily Quiz</div>}</div>;
}
