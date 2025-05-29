import { InputLabel } from "@mui/material";
import styles from "./ChipsOption.module.scss";
import { useQuizSettingsStore } from "@/stores/quizSettingsStore";
import { categories as categoriesOptions } from "@/lib/data/optionsValues";
import Chips from "./Chips";

const CategoriesChips = () => {
  const categories = useQuizSettingsStore((state) => state.categories);
  const updateCategories = useQuizSettingsStore((state) => state.updateCategories);

  const toggleCategory = (selectedCategory: string) => {
    if (selectedCategory === categories[0] && categories.length === 1) return;
    updateCategories(selectedCategory);
  };

  return (
    <div className={styles.option}>
      <InputLabel className={styles.option_label}>Categories of questions:</InputLabel>
      <Chips options={categoriesOptions} selectedOptions={categories} toggleOption={toggleCategory}/>
    </div>
  );
};

export default CategoriesChips;
