import QuizSettings from "@/components/QuizSettings/QuizSettings";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Queasy</h1>
      <QuizSettings />
    </div>
  );
}
