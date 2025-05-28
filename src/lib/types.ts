export type Category = {
    name: string,
    id: number
}

export type Question = {
    category: string,
    text: string,
    correctAnswer: string,
    incorrectAnswers: string[]
}

export type QuestionType = 'multiple' | 'boolean';

export type Difficulty = 'easy' | 'medium' | 'hard';


export interface QuestionFilters {
    amount: number,
    category?: number,
    type?: QuestionType,
    difficulty: Difficulty
}

export interface QuestionData {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}