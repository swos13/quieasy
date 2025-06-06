import { Button } from "@mui/material";
import styles from "./NextButton.module.scss";
import { useQuizAnswersStore } from "@/stores/quizAnswersStore";

interface INextButton {
  isLast: boolean;
  handleClick: () => void;
}

export default function NextButton({ isLast, handleClick }: INextButton) {
  const selectedAnswer = useQuizAnswersStore((state) => state.selectedAnswer);

  return (
    <Button className={styles.next_button + ` ${!selectedAnswer ? styles.disabled : ""}`} variant="contained" onClick={handleClick}>
      {isLast ? "Finish" : "Next"}
    </Button>
  );
}
