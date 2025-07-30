import { createDailyQuiz, getTodaysDailyQuiz } from "@/lib/firebase/firestore/dailyQuiz";
import { NextResponse } from "next/server";

export async function GET() {
  const dailyQuiz = await getTodaysDailyQuiz();

  return NextResponse.json({ dailyQuiz });
}

export async function POST() {
  const dailyQuiz = await createDailyQuiz();

  return NextResponse.json({ dailyQuiz });
}
