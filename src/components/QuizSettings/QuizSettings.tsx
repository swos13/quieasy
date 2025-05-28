"use client";

import { useState } from "react";
import { createSearchParams } from "../../tools/helpers";
import { Difficulty, QuestionType } from "@/lib/types";
import styles from "./QuizSettings.module.scss";
import { Button, InputLabel, MenuItem, Select, CircularProgress, Chip } from "@mui/material";
import { limits, categories, difficulties, questionTypes } from "./optionsValues";
import { useRouter } from "next/navigation";

interface SettingsOptions {
  limit: number;
  categories: string[];
  difficulties: Difficulty[];
  types: QuestionType[];
}

const defaultSettingsOptions: SettingsOptions = {
  limit: 10,
  categories: [""],
  difficulties: [""],
  types: [""],
};

const menuProps = {
  PaperProps: {
    className: styles.menu_paper,
  },
  MenuListProps: {
    className: styles.menu_list, // optional if you want to style the list itself
  },
};

export default function QuizSettings() {
  const [settingsOptions, setSettingsOptions] = useState<SettingsOptions>(defaultSettingsOptions);
  const router = useRouter();
  const [isStarting, setIsStarting] = useState<boolean>();

  const handleStart = () => {
    setIsStarting(true);
    const searchQueryParams = createSearchParams(settingsOptions.limit, settingsOptions.categories, settingsOptions.difficulties, settingsOptions.types);
    router.push(`./questions?${searchQueryParams}`);
  };

  const toggleCategory = (selectedCategory: string) => {
    setSettingsOptions((prev) => {
      const categories = prev.categories;
      const newCategories = categories.includes(selectedCategory)
        ? categories.filter((category) => category !== selectedCategory)
        : [...categories, selectedCategory];
      return { ...prev, categories: newCategories };
    });
  };

  const toggleType = (selectedType: QuestionType) => {
    setSettingsOptions((prev) => {
      const types = prev.types;
      const newTypes = types.includes(selectedType)
        ? types.filter((category) => category !== selectedType)
        : [...types, selectedType];
      return { ...prev, types: newTypes };
    });
  };

  const toggleDifficulty = (selectedDifficulty: Difficulty) => {
    setSettingsOptions((prev) => {
      const difficulties = prev.difficulties;
      const newDifficulties = difficulties.includes(selectedDifficulty)
        ? difficulties.filter((category) => category !== selectedDifficulty)
        : [...difficulties, selectedDifficulty];
      return { ...prev, difficulties: newDifficulties };
    });
  };

  const handleUpdate = <K extends keyof SettingsOptions>(name: K, value: SettingsOptions[K]) => {
    setSettingsOptions((prev) => {
      const newSettingsOptions: SettingsOptions = { ...prev };
      newSettingsOptions[name] = value;
      return newSettingsOptions;
    });
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
          value={settingsOptions.limit}
          onChange={(event) => handleUpdate("limit", event.target.value)}
          MenuProps={menuProps}
          inputProps={{ className: styles.select_input }}>
          {limits.map((limit) => (
            <MenuItem value={limit} key={limit}>
              {limit}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.option}>
        <InputLabel className={styles.option_label} id="category-select-label">
          Categories of questions:
        </InputLabel>
        <div className={styles.chips_wrapper}>
          {categories.map((category) => (
            <Chip
              className={styles.chip}
              key={category.value}
              label={category.name}
              color="info"
              variant={settingsOptions.categories.includes(category.value) ? "filled" : "outlined"}
              onClick={() => toggleCategory(category.value)}
            />
          ))}
        </div>
      </div>
      <div className={styles.option}>
         <InputLabel className={styles.option_label} id="type-select-label">
           Types:
         </InputLabel>
        <div className={styles.chips_wrapper}>
          {questionTypes.map((type) => (
            <Chip
              className={styles.chip}
              key={type.value}
              label={type.name}
              color="info"
              variant={settingsOptions.types.includes(type.value) ? "filled" : "outlined"}
              onClick={() => toggleType(type.value)}
            />
          ))}
        </div>
       </div>
       <div className={styles.option}>
         <InputLabel className={styles.option_label} id="difficulty-select-label">
           Difficulty:
         </InputLabel>
        <div className={styles.chips_wrapper}>
          {difficulties.map((difficulty) => (
            <Chip
              className={styles.chip}
              key={difficulty.value}
              label={difficulty.name}
              color="info"
              variant={settingsOptions.difficulties.includes(difficulty.value) ? "filled" : "outlined"}
              onClick={() => toggleDifficulty(difficulty.value)}
            />
          ))}
        </div>
       </div>
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
