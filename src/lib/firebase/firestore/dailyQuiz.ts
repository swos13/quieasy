import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { getQuestions } from "@/lib/api";
import { DailyQuiz } from "@/lib/types";
import { generateQuizUUID } from "@/tools/helpers";

const DAILY_QUIZ_COLLECTION = "daily_quizes";


//TODO: do logic for today's daily quiz
export async function getTodayDailyQuiz() {
  const docRef = doc(db, DAILY_QUIZ_COLLECTION, "ffsdfsd");
  return await getDoc(docRef);
}

export async function getDailyQuizById(dailyId: string) {
  const docRef = doc(db, DAILY_QUIZ_COLLECTION, dailyId);
  return await getDoc(docRef);
}


//TODO: find by date
export async function getDailyQuizByDate(dailyId: string) {
  const docRef = doc(db, DAILY_QUIZ_COLLECTION, dailyId);
  return await getDoc(docRef);
}

export async function createDailyQuiz() {
  try {
    const newQuestions = await getQuestions(20);
    const date = new Date().toLocaleDateString("en-US");
    const newDailyQuiz: DailyQuiz = { id: generateQuizUUID(), questions: newQuestions, date };
    const quizRef = await addDoc(collection(db, DAILY_QUIZ_COLLECTION), newDailyQuiz);
    return (await getDoc(quizRef)).data();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
