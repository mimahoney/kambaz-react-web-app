import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUESTION_API = `${REMOTE_SERVER}/api/quizzes/${quizId}/questions`;

export const findQuestionsForQuiz = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/questions`);
  return response.data;
};

export const createQuestionForQuiz = async (courseId: string, question: any) => {
  const response = await axios.post(`api/courses/${courseId}/questions`, question);
  return response.data;
};

export const deleteQuizQuestion = async (questionId: string) => {
  const response = await axios.delete(`${QUESTION_API}/questions/${questionId}`);
  return response.data;
};