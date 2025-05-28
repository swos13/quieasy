'use client';

//import { QuestionType } from "@/lib/types";
import { useLayoutEffect, useRef } from "react";
import { Question as IQuestion } from "@/lib/types";
import styles from "./Question.module.scss";
import { Grid } from "@mui/material";


const Question = ({ text, correctAnswer, incorrectAnswers, category }: IQuestion) => {
  const shuffledRef = useRef<string[] | null>(null);

  useLayoutEffect(() => {
    if (!shuffledRef.current) {
      const answers = [correctAnswer, ...incorrectAnswers];
      const shuffled = [...answers];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      shuffledRef.current = shuffled;
    }
  }, [correctAnswer, incorrectAnswers]);

  console.log(shuffledRef.current)

  return (
    <div className={styles.question_wrapper}>
      <div className={styles.category}>{category}</div>
      <div className={styles.text}>{text}</div>
      <Grid container className={styles.answers} columns={{xs: 1, sm: 2}}>
        {shuffledRef.current &&
          shuffledRef.current.map((answer, index) => 
            <Grid key={index} className={styles.answer}>{answer}</Grid>
          )}
      </Grid>
    </div>
  );
};

export default Question;
