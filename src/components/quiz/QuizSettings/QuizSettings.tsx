"use client";

import { useState } from "react";
import { createSearchParams } from "../../../tools/helpers";
import { Difficulty, QuestionType } from "@/app/lib/types";
import style from "./QuizSettings.module.css";
import { Button, InputLabel, Select } from "@mui/material";

interface SearchProps {
    amount: number,
    category: number,
    difficulty: Difficulty | "",
    type: QuestionType | "",
}

const defaultSearchProps: SearchProps = {
    amount: 10,
    category: 0,
    difficulty: "",
    type: ""
}


export default function QuizSettings() {
  const [searchProps, setSearchProps] = useState<SearchProps>(defaultSearchProps)
  //const [filters, setFilters] =

  const handleSubmit = () => {
    const searchQueryParams = createSearchParams(searchProps.amount, searchProps.category, searchProps.difficulty, searchProps.type);
    console.log(searchQueryParams);
  };

  const handleUpdate = <K extends keyof SearchProps>(name: K, value: SearchProps[K]) => {
    setSearchProps(prev => {
        const newSearchProps: SearchProps = {...prev};
        newSearchProps[name] = value;
        return newSearchProps;
    })
  }
  return (
    <div className={style.container}>
      <div className={style.option}>
        <InputLabel id="amount-select-label">Number of questions:</InputLabel>
        <Select labelId="amount-select-label" value={searchProps.amount} onChange={(event) => handleUpdate("amount", event.target.value)}></Select>
      </div>
      <div className={style.option}>
        <InputLabel id="category-select-label">Category of questions:</InputLabel>
        <Select labelId="category-select-label" value={searchProps.category} onChange={(event) => handleUpdate("category", event.target.value)}></Select>
      </div>
      <div className={style.option}>
        <InputLabel id="type-select-label">Type:</InputLabel>
        <Select labelId="type-select-label" value={searchProps.type} onChange={(event) => handleUpdate("type", event.target.value)}></Select>
      </div>
      <div className={style.option}>
        <InputLabel id="difficulty-select-label">Difficulty:</InputLabel>
        <Select labelId="difficulty-select-label" value={searchProps.difficulty} onChange={(event) => handleUpdate("difficulty", event.target.value)}></Select>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
