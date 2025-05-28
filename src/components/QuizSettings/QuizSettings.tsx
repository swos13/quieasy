"use client";

import { useState } from "react";
import { createSearchParams } from "../../tools/helpers";
import { Difficulty, QuestionType } from "@/lib/types";
import styles from "./QuizSettings.module.scss";
import { Button, InputLabel, MenuItem, Select, CircularProgress } from "@mui/material";
import { amounts, categories, difficulties, questionTypes } from "./optionsValues";
import { useRouter } from "next/navigation";
import useToken from "@/tools/hooks/useToken";

interface SettingsOptions {
  amount: number;
  category: number;
  difficulty: Difficulty | "";
  type: QuestionType | "";
}

const defaultSettingsOptions: SettingsOptions = {
  amount: 10,
  category: 0,
  difficulty: "",
  type: "",
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
  const { token, isLoading: isTokenLoading } = useToken();
  const [isStarting, setIsStarting] = useState<boolean>();

  const handleStart = () => {
    setIsStarting(true);
    const searchQueryParams = createSearchParams(settingsOptions.amount, settingsOptions.category, settingsOptions.difficulty, settingsOptions.type);
    router.push(`./quiz?${searchQueryParams}${token ? "&token=" + token : ""}`);
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
        <InputLabel className={styles.option_label} id="amount-select-label">
          Number of questions:
        </InputLabel>
        <Select
          className={styles.option_select}
          variant="outlined"
          labelId="amount-select-label"
          value={settingsOptions.amount}
          onChange={(event) => handleUpdate("amount", event.target.value)}
          MenuProps={menuProps}
          inputProps={{ className: styles.select_input }}>
          {amounts.map((amount) => (
            <MenuItem value={amount} key={amount}>
              {amount}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.option}>
        <InputLabel className={styles.option_label} id="category-select-label">
          Category of questions:
        </InputLabel>
        <Select
          className={styles.option_select}
          variant="outlined"
          labelId="category-select-label"
          value={settingsOptions.category}
          onChange={(event) => handleUpdate("category", event.target.value)}
          MenuProps={menuProps}
          inputProps={{ className: styles.select_input }}>
          {categories.map((category) => (
            <MenuItem value={category.value} key={category.value}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.option}>
        <InputLabel className={styles.option_label} id="type-select-label">
          Type:
        </InputLabel>
        <Select
          className={styles.option_select}
          variant="outlined"
          labelId="type-select-label"
          value={settingsOptions.type}
          onChange={(event) => handleUpdate("type", event.target.value)}
          MenuProps={menuProps}
          inputProps={{ className: styles.select_input }}
          displayEmpty>
          {questionTypes.map((type, index) => (
            <MenuItem value={type.value} key={index}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.option}>
        <InputLabel className={styles.option_label} id="difficulty-select-label">
          Difficulty:
        </InputLabel>
        <Select
          className={styles.option_select}
          variant="outlined"
          labelId="difficulty-select-label"
          value={settingsOptions.difficulty}
          onChange={(event) => handleUpdate("difficulty", event.target.value)}
          MenuProps={menuProps}
          inputProps={{ className: styles.select_input }}
          displayEmpty>
          {difficulties.map((difficulty, index) => (
            <MenuItem value={difficulty.value} key={index}>
              {difficulty.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Button
        className={styles.button}
        variant="contained"
        onClick={() => {
          if (!isTokenLoading && !isStarting) handleStart();
        }}>
        {isTokenLoading || isStarting ? (
          <div className={styles.loader_box}>
            <CircularProgress size={32} color="inherit"/>
          </div>
        ) : (
          "Start"
        )}
      </Button>
    </div>
  );
}
