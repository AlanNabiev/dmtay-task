export interface questionsApi {
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array<String>
}

export interface answersInfo {
  answer: String,
  question: String,
  accuracy: Boolean
}