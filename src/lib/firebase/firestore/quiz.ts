import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../config";

export async function createQuiz(data: DocumentData) {
  try {
    const quizRef = addDoc(collection(db, "daily_quizes"), data);
    return (await quizRef).id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function getQuizes() {
  const querySnapshot = await getDocs(collection(db, "daily_quizes"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
