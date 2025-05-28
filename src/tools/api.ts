import { QuestionData } from "@/lib/types";
import { extractQuestion } from "./helpers";

export const fetchData = async (paramsString: string = "limit=10") => {
  try {
    console.log(paramsString);
    const response = await fetch(`${process.env.API_URL} ${paramsString}`);

    console.log("URL:", process.env.API_URL + paramsString)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

export const getToken = async () => {
  console.log("Getting Token");
  const response = await fetch("https://opentdb.com/api_token.php?command=request");

  if (!response.ok) {
    throw new Error(`HTTP error while getting token! status: ${response.status}`);
  }

  const data = await response.json();

  return data.token;
};

export async function getQuestions(searchQuery: string) {
  const data = await fetchData(searchQuery);
  const questions = data.results;

  return questions.map((question: QuestionData) => extractQuestion(question));;
}
