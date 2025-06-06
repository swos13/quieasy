import { Difficulty, QuestionType } from "@/lib/types";

export const limits = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

export const categories = [
  { value: "", name: "Any category (mix)" },
  { value: "general_knowledge", name: "General Knowledge" },
  { value: "science", name: "Science" },
  { value: "society_and_culture", name: "Society and culture" },
  { value: "history", name: "History" },
  { value: "arts_and_literature", name: "Arts and literature" },
  { value: "geography", name: "Geography" },
  { value: "sport_and_leisure", name: "Sport and leisure" },
  { value: "film_and_tv", name: "Film and TV" },
  { value: "music", name: "Music" },
  { value: "food_and_drink", name: "Food and drink" },
];

type Difficulties = {
  value: Difficulty,
  name: string
}

export const difficulties: Difficulties[] = [
  { value: "", name: "Any" },
  { value: "easy", name: "Easy" },
  { value: "medium", name: "Medium" },
  { value: "hard", name: "Hard" },
];

type QuestionTypes = {
  value: QuestionType,
  name: string
}

export const questionTypes: QuestionTypes[] = [
  { value: "", name: "Any" },
  { value: "text_choice", name: "Text" },
  { value: "image_choice", name: "Image" },
];
