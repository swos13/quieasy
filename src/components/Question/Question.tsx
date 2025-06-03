"use client";

import { useMemo } from "react";
import { Question as IQuestion } from "@/lib/types";
import styles from "./Question.module.scss";
import { Grid } from "@mui/material";
import { categories } from "@/lib/data/optionsValues";
import { shuffleArray } from "@/tools/helpers";
import { useQuizAnswersStore } from "@/stores/quizAnswersStore";

const Question = ({ text, correctAnswer, incorrectAnswers, category }: IQuestion) => {
  const shuffledArray = useMemo(() => shuffleArray([correctAnswer, ...incorrectAnswers]), [correctAnswer, incorrectAnswers]);
  const setSelectedAnswer = useQuizAnswersStore((state) => state.setSelectedAnswer);
  const selectedAnswer = useQuizAnswersStore((state) => state.selectedAnswer);

  return (
    <div className={styles.question}>
      <div className={styles.category}>{categories ? categories.find((c) => c.value === category)?.name : ""}</div>
      <div className={styles.text}>{text}</div>
      <Grid container className={styles.answers_wrapper} columns={{ xs: 1, sm: 2 }} spacing={1}>
        {shuffledArray &&
          shuffledArray.map((answer: string, index: number) => (
            <Grid
              key={index}
              className={`${styles.answer} ${selectedAnswer === answer ? styles.selected : ""}`}
              size={1}
              onClick={() => setSelectedAnswer(answer)}>
              {answer}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Question;
