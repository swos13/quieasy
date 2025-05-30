"use client";

import { useMemo } from "react";
import { Question as IQuestion } from "@/lib/types";
import styles from "./Question.module.scss";
import { Grid } from "@mui/material";
import { categories } from "@/lib/data/optionsValues";
import { shuffleArray } from "@/tools/helpers";

const Question = ({ text, correctAnswer, incorrectAnswers, category }: IQuestion) => {
  
  const shuffledArray = useMemo(() => shuffleArray([correctAnswer, ...incorrectAnswers]), [correctAnswer, incorrectAnswers])

  return (
    <>
      <div className={styles.category}>{categories ? categories.find((c) => c.value === category)?.name : ""}</div>
      <div className={styles.text}>{text}</div>
      <Grid container className={styles.answers} columns={{ xs: 1, sm: 2 }}>
        {shuffledArray &&
          shuffledArray.map((answer: string, index: number) => (
            <Grid key={index} className={styles.answer}>
              {answer}
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Question;
