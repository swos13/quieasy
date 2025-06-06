"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import SummaryAnswers from "@/components/SummaryAnswers/SummaryAnswers";
import { QuizSummary } from "@/lib/types";
import { useQuizAnswersStore } from "@/stores/quizAnswersStore";
import { Button, CircularProgress, Typography } from "@mui/material";
import styles from "./summary.module.scss";

export default function Summary() {
  const params = useParams();
  const urlQuizId = params.quizId ?? "";
  const [quizId, setQuizId] = useState(useQuizAnswersStore((state) => state.quizId));
  const answers = useQuizAnswersStore((state) => state.answers);
  const questions = useQuizAnswersStore((state) => state.questions);
  const [summary, setSummary] = useState<QuizSummary>({ id: urlQuizId[0], answers, questions });
  const router = useRouter();
  console.log(urlQuizId, quizId);

  const handleGoToMenu = () => router.push("/");

  useEffect(() => {
    if (urlQuizId !== quizId) {
      //FETCH data from db fetch("apiUrlWithUrlQuizId")
      // consider session???
      const newSummary = { id: "newId", answers, questions };
      setSummary(newSummary);
      setQuizId(newSummary.id);
    }
  }, []);


  return (
    <section className={styles.summary_wrapper}>
      <Typography variant="h4">Summary:</Typography>
      <div className={styles.summary_content}>{urlQuizId === quizId ? <SummaryAnswers summary={summary} /> : <CircularProgress />}</div>
      <Button variant="contained" onClick={handleGoToMenu}>Back to menu</Button>
    </section>
  );
}
