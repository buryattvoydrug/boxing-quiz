export interface QuestionI {
    "title": string,
    "variants": string[],
    "correct": string,
    "description": {
      "text": string,
      "image": string
    }
}