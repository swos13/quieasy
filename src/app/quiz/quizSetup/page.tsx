import QuizSettings from "@/components/QuizSettings/QuizSettings";
import styles from "./quizSetup.module.scss";
export default function QuizSetup() {
    
  return (
    <div className={styles.page}>
      <h1>Quiz settings</h1>
      <QuizSettings />
    </div>
  );
}