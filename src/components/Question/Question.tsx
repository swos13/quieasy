"use client";

import { useLayoutEffect, useRef } from "react";
import { Question as IQuestion } from "@/lib/types";
import styles from "./Question.module.scss";
import { Grid } from "@mui/material";
import { categories } from "@/lib/data/optionsValues";

const Question = ({ text, correctAnswer, incorrectAnswers, category }: IQuestion) => {
  const shuffledRef = useRef<string[] | null>(null);

  useLayoutEffect(() => {
    const answers = [correctAnswer, ...incorrectAnswers];
    const shuffled = [...answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    shuffledRef.current = shuffled;
  }, [correctAnswer, incorrectAnswers]);

  return (
    <div className={styles.question_wrapper}>
      <div className={styles.category}>{categories ? categories.find(c => c.value === category)?.name : ""}</div>
      <div className={styles.text}>{text}</div>
      <Grid container className={styles.answers} columns={{ xs: 1, sm: 2 }}>
        {shuffledRef.current &&
          shuffledRef.current.map((answer, index) => (
            <Grid key={index} className={styles.answer}>
              {answer}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Question;
