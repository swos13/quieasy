import { InputLabel } from "@mui/material";
import styles from "./ChipsOption.module.scss";
import { useQuizSettingsStore } from "@/stores/quizSettingsStore";
import { questionTypes as typesOptions } from "@/lib/data/optionsValues";
import Chips from "./Chips";
import { QuestionType } from "@/lib/types";

const TypesChips = () => {
  const types = useQuizSettingsStore((state) => state.types);
  const updateTypes = useQuizSettingsStore((state) => state.updateTypes);

  const toggleType = (selectedType: QuestionType) => {
    if (selectedType === types[0] && types.length === 1) return;
    updateTypes(selectedType);
  };

  return (
    <div className={styles.option}>
      <InputLabel>Types:</InputLabel>
      <Chips options={typesOptions} selectedOptions={types} toggleOption={(value) => toggleType(value as QuestionType)}/>
    </div>
  );
};

export default TypesChips;
