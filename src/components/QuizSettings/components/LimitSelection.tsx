import { useQuizSettingsStore } from "@/stores/quizSettingsStore";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { limits } from "@/lib/data/optionsValues";
import styles from "../QuizSettings.module.scss";

const menuProps = {
  PaperProps: {
    className: styles.menu_paper,
  },
  MenuListProps: {
    className: styles.menu_list, // optional if you want to style the list itself
  },
};

const LimitSelection = () => {
  const changeLimit = useQuizSettingsStore((state) => state.changeLimit);
  const limit = useQuizSettingsStore((state) => state.limit);

  return (
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
  );
};

export default LimitSelection;
