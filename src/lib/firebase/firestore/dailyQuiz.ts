import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config";
import { getQuestions } from "@/lib/api";
import { DailyQuiz } from "@/lib/types";
import { isValidDateFormat } from "@/tools/helpers";

const DAILY_QUIZZES_COLLECTION = "daily_quizzes";

//TODO: do logic for today's daily quiz
export async function getTodaysDailyQuiz() {
  try {
    const today = new Date().toLocaleDateString("en-US");
    const docRef = doc(db, DAILY_QUIZZES_COLLECTION, today);
    return await getDoc(docRef);
  } catch (error) {
    console.log("Encountered error while getting today's daily quiz:", error);
  }
}

export async function getDailyQuizByDate(date: string) {
  try {
    if (!isValidDateFormat(date)) throw Error("Incorrect date format! Use valid date in MM/DD/YYYY format.");
    const docRef = doc(db, DAILY_QUIZZES_COLLECTION, date);
    return await getDoc(docRef);
  } catch (error) {
    console.log("Encountered error while getting daily quiz:", error);
  }
}

export async function createDailyQuiz() {
  try {
    const newQuestions = await getQuestions(20);
    const date = new Date().toLocaleDateString("en-US");
    const newDailyQuiz: DailyQuiz = { questions: newQuestions  };
    const docRef = doc(db, DAILY_QUIZZES_COLLECTION, date);
    await setDoc(docRef, newDailyQuiz);
    return (await getDoc(docRef)).data();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
