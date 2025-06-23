import QuizSettings from "@/components/QuizSettings/QuizSettings";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Quiz settings</h1>
      <QuizSettings />
    </div>
  );
}
