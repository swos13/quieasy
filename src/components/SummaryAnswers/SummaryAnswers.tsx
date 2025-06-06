"use client";

interface ISummaryAnswers {
  summary: QuizSummary;
}

import { QuizSummary } from "@/lib/types";
import { countCorrectAnswers } from "@/tools/helpers";
import { Typography } from "@mui/material";
import styles from './SummaryAnswers.module.scss';



export default function SummaryAnswers({ summary }: ISummaryAnswers) {

  const { questions, answers } = summary;

  console.log(summary);

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.score}> Score: {countCorrectAnswers(summary)}/{questions.length}</Typography>
      {answers.map((answer, index) => (
        <div className={styles.answer} key={index}>
          {index + 1}. {questions[index].text}
          <Typography className={`${ answer === questions[index].correctAnswer ? styles.correct : styles.error }`} color={`${answer === questions[index].correctAnswer ? "success" : "error"}`}>Your answer: {answer}</Typography>
          <Typography>Correct answer: {questions[index].correctAnswer}</Typography>
        </div>
      ))}
    </div>
  );
}
