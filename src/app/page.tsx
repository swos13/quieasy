import QuizSettings from "@/components/QuizSettings/QuizSettings";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home page</h1>
      <QuizSettings />
    </div>
  );
}
