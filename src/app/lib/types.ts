export type Category = {
    name: string,
    id: number
}

export type Question = {
    type: QuestionType
    category: string,
    text: string,
    answers: Array<string>,
}

export type QuestionType = 'multiple' | 'boolean';

export type Difficulty = 'easy' | 'medium' | 'hard';


export interface QuestionFilters {
    amount: number,
    category?: number,
    type?: QuestionType,
    difficulty: Difficulty
}