import styles from "./home.module.scss";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <Typography variant="h3">Choose quiz type:</Typography>
      <Button className={styles.link_button} component={Link} href="./quiz/dailyQuiz" variant="contained">
        <span>Daily Quiz</span>
      </Button>
      <Button className={styles.link_button} component={Link} href="./quiz/quizSetup" variant="contained">
        <span>Random Quiz</span>
      </Button>
    </div>
  );
}
