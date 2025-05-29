"use client";

import { useState } from "react";
import { createSearchParams } from "../../tools/helpers";
import styles from "./QuizSettings.module.scss";
import { Button, InputLabel, MenuItem, Select, CircularProgress } from "@mui/material";
import { limits } from "../../lib/data/optionsValues";
import { useRouter } from "next/navigation";
import { useQuizSettingsStore } from "@/stores/quizSettingsStore";
import CategoriesChips from "./ChipsOption/CategoriesChips";
import TypesChips from "./ChipsOption/TypesChips";
import DifficultyChips from "./ChipsOption/DifficultyChips";

const menuProps = {
  PaperProps: {
    className: styles.menu_paper,
  },
  MenuListProps: {
    className: styles.menu_list, // optional if you want to style the list itself
  },
};

export default function QuizSettings() {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState<boolean>();

  const limit = useQuizSettingsStore((state) => state.limit);
  const changeLimit = useQuizSettingsStore((state) => state.changeLimit);

  const handleStart = () => {
    setIsStarting(true);
    const { limit, categories, difficulties, types } = useQuizSettingsStore.getState();
    const searchQueryParams = createSearchParams(limit, categories, difficulties, types);
    console.log(searchQueryParams);
    router.push(`./quiz?${searchQueryParams}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.option}>
        <InputLabel className={styles.option_label} id="limit-select-label">
          Number of questions:
        </InputLabel>
        <Select
          className={styles.option_select}
          variant="outlined"
          labelId="limit-select-label"
          value={limit}
          onChange={(event) => changeLimit(event.target.value)}
          MenuProps={menuProps}
          inputProps={{ className: styles.select_input }}>
          {limits.map((limit) => (
            <MenuItem value={limit} key={limit}>
              {limit}
            </MenuItem>
          ))}
        </Select>
      </div>
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
