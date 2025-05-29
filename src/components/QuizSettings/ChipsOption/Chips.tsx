import { Difficulty, QuestionType } from "@/lib/types";
import { Chip } from "@mui/material";
import styles from "./ChipsOption.module.scss";

type Value = string | QuestionType | Difficulty;

interface Option {
  value: Value;
  name: string;
}

interface IChips {
  options: Option[];
  selectedOptions: Array<Value>;
  toggleOption<T extends Value> (newValue: T): void;
}

const Chips = ({ options, selectedOptions, toggleOption }: IChips) => {
  return (
    <div className={styles.chips_wrapper}>
      {options.map((option: Option) => (
        <Chip
          className={styles.chip}
          key={option.value}
          label={option.name}
          color="info"
          variant={selectedOptions.includes(option.value) ? "filled" : "outlined"}
          onClick={() => toggleOption(option.value)}
        />
      ))}
    </div>
  );
};

export default Chips;
