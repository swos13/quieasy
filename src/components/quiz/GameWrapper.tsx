import { getQuestions } from "@/tools/helpers";

export default async function GameWrapper(){
    const questions = await getQuestions();
    console.log(questions);
    return(
        <div>
            data
        </div>
    )
} 