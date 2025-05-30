"use client";

import { useEffect, useRef, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Question as IQuestion, QuizSaveState } from "@/lib/types";
import Question from "../Question/Question";
import styles from "./QuestionsWrapper.module.scss";
import { loadQuizSession, saveQuizSession } from "@/tools/storage";
import { useRouter } from "next/navigation";

interface IQuestionsWrapper {
  questions: IQuestion[];
  loadFromStorage: boolean;
  quizId?: string | null;
  isNew: boolean;
}

const QuestionsWrapper = ({ questions, loadFromStorage, quizId, isNew }: IQuestionsWrapper) => {
  const [quizQuestions, setQuizQuestions] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState({ number: 0, question: questions[0] });
  const [loading, setLoading] = useState<boolean>(loadFromStorage);
  const [isNewQuiz, setIsNewQuiz] = useState<boolean>(isNew);
  const [answers, setAnswers] = useState<string[]>([]);
  const quizSaveState = useRef<QuizSaveState>(null);
  const router = useRouter();

  const saveQuiz = () => {
    if (!quizId) return;
    const newQuizSaveState = {
      id: quizId,
      questions: quizQuestions,
      current: currentQuestion.number,
      answers,
    };
    saveQuizSession(newQuizSaveState);
    quizSaveState.current = newQuizSaveState;
    if (isNewQuiz) {
      setIsNewQuiz(false);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("isNew");
      window.history.replaceState({}, "", newUrl.toString());
    }
  };

  const handleNextQuestion = () => {
    saveQuiz();
    setCurrentQuestion((prev) => ({ number: prev.number + 1, question: quizQuestions[prev.number + 1] }));
  };

  useEffect(() => {
    if (!quizId) router.push("/");
    else if (loadFromStorage) {
      const loadedQuiz: QuizSaveState = loadQuizSession(quizId);
      if (!loadedQuiz) router.push("/");

      setQuizQuestions(loadedQuiz.questions);
      setCurrentQuestion({ number: loadedQuiz.current, question: loadedQuiz.questions[loadedQuiz.current] });
      setAnswers(loadedQuiz.answers);
      setLoading(false);
      quizSaveState.current = loadedQuiz;
    }
  }, [loadFromStorage, quizId]);

  useEffect(() => {
      if(isNew) saveQuiz();
  }, [])

  return (
    <div className={styles.question_wrapper}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Question {...currentQuestion.question} />
          <Button className={styles.next_button} variant="outlined" onClick={handleNextQuestion}>
            Next
          </Button>
        </>
      )}
    </div>
  );
};

export default QuestionsWrapper;
