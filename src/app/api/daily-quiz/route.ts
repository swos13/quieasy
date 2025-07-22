import { createDailyQuiz } from "@/lib/firebase/firestore/dailyQuiz";
import { NextResponse } from "next/server";

export async function GET(){
    const dailyQuiz = await createDailyQuiz();
    
    return NextResponse.json({dailyQuiz})
}