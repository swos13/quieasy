"use client";

import { useState } from "react";
import { createSearchParams, generateQuizUUID } from "../../tools/helpers";
import styles from "./QuizSettings.module.scss";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useQuizSettingsStore } from "@/stores/quizSettingsStore";
import CategoriesChips from "./components/ChipsOption/CategoriesChips";
import TypesChips from "./components/ChipsOption/TypesChips";
import DifficultyChips from "./components/ChipsOption/DifficultyChips";
import LimitSelection from "./components/LimitSelection";

export default function QuizSettings() {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState<boolean>();

  const handleStart = () => {
    setIsStarting(true);
    const { limit, categories, difficulties, types } = useQuizSettingsStore.getState();
    const searchQueryParams = createSearchParams(limit, categories, difficulties, types);
    console.log(searchQueryParams);
    const quizId = generateQuizUUID();
    router.push(`./quiz?${searchQueryParams}&quizId=${quizId}&isNew=true`);
  };

  return (
    <div className={styles.container}>
      <LimitSelection />
      <CategoriesChips />
      <TypesChips />
      <DifficultyChips />
      <Button
        className={styles.button}
        variant="contained"
        onClick={() => {
          if (!isStarting) handleStart();
        }}>
        {isStarting ? (
          <div className={styles.loader_box}>
            <CircularProgress size={32} color="inherit" />
          </div>
        ) : (
          "Start"
        )}
      </Button>
    </div>
  );
}
