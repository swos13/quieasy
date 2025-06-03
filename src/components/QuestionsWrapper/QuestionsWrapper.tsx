"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { Question as IQuestion, QuizSaveState } from "@/lib/types";
import Question from "../Question/Question";
import styles from "./QuestionsWrapper.module.scss";
import { loadQuizSession, saveQuizSession } from "@/tools/storage";
import { useQuizAnswersStore } from "@/stores/quizAnswersStore";
import NextButton from "../NextButton/NextButton";

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
  const quizSaveState = useRef<QuizSaveState>(null);
  const router = useRouter();

  const saveQuizState = (questionNumber: number, questionAnswers: string[]) => {
    if (!quizId) return;
    const newQuizSaveState = {
      id: quizId,
      questions: quizQuestions,
      current: questionNumber,
      answers: questionAnswers,
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

  const handleNext = () => {
    const { answers, selectedAnswer, addAnswer, setSelectedAnswer } = useQuizAnswersStore.getState();
    if (selectedAnswer) {
      saveQuizState(currentQuestion.number + 1, [...answers, selectedAnswer]);
      addAnswer(selectedAnswer);
      setSelectedAnswer(null);
      if (currentQuestion.number + 1 === questions.length) router.push(`/quiz/${quizId}/summary`);
      else setCurrentQuestion((prev) => ({ number: prev.number + 1, question: quizQuestions[prev.number + 1] }));
    }
  };

  useEffect(() => {
    if (!quizId) router.push("/");
    else if (loadFromStorage) {
      const loadedQuiz: QuizSaveState = loadQuizSession(quizId);
      if (!loadedQuiz) router.push("/");

      const { setAnswers } = useQuizAnswersStore.getState();

      setQuizQuestions(loadedQuiz.questions);
      setCurrentQuestion({ number: loadedQuiz.current, question: loadedQuiz.questions[loadedQuiz.current] });
      setAnswers(loadedQuiz.answers);
      setLoading(false);
      quizSaveState.current = loadedQuiz;
    }
  }, [loadFromStorage, quizId]);

  useEffect(() => {
    if (isNew) saveQuizState(0, []);
  }, []);

  return (
    <div className={styles.question_wrapper}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <span className={styles.number}>
            Question {currentQuestion.number + 1} of {questions.length}
          </span>
          <Question {...currentQuestion.question} />
          <NextButton isLast={currentQuestion.number === questions.length - 1} handleClick={handleNext} />
        </>
      )}
    </div>
  );
};

export default QuestionsWrapper;
