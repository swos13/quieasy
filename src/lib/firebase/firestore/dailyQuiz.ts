import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { getQuestions,  } from "@/lib/api";
import { Quiz } from "@/lib/types";
import { generateQuizUUID } from "@/tools/helpers";

const DAILY_QUIZ_COLLECTION = "daily_quizes";

export async function getDailyQuiz(dailyId: string) {
  const docRef = doc(db, DAILY_QUIZ_COLLECTION, dailyId);
  return await getDoc(docRef);
}

export async function getDailyQuizByDate(dailyId: string) {
  const docRef = doc(db, DAILY_QUIZ_COLLECTION, dailyId);
  return await getDoc(docRef);
}

export async function createDailyQuiz() {
    try {
      const newQuestions = await getQuestions(20);
      const newDailyQuiz: Quiz = { id: generateQuizUUID(), questions: newQuestions };
      const quizRef = await addDoc(collection(db, DAILY_QUIZ_COLLECTION), newDailyQuiz);
      return (await getDoc(quizRef)).data();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}