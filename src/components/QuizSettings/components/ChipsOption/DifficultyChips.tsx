import { InputLabel } from "@mui/material";
import styles from "./ChipsOption.module.scss";
import { useQuizSettingsStore } from "@/stores/quizSettingsStore";
import { difficulties as difficultiesOptions } from "@/lib/data/optionsValues";
import Chips from "./Chips";
import { Difficulty } from "@/lib/types";

const DifficultyChips = () => {
  const difficulties = useQuizSettingsStore((state) => state.difficulties);
  const updateDifficulties = useQuizSettingsStore((state) => state.updateDifficulties);

  const toggleDifficulty = (selectedDifficulty: Difficulty) => {
    if (selectedDifficulty === difficulties[0] && difficulties.length === 1) return;
    updateDifficulties(selectedDifficulty);
  };

  return (
    <div className={styles.option}>
      <InputLabel className={styles.option_label}>Difficulty of questions:</InputLabel>
      <Chips options={difficultiesOptions} selectedOptions={difficulties} toggleOption={(value) => toggleDifficulty(value as Difficulty)}/>
    </div>
  );
};

export default DifficultyChips;
