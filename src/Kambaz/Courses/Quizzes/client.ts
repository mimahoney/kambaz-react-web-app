import axios from "axios";
axios.defaults.withCredentials = true;

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchAllQuizzes = async () => {
  const { data } = await axios.get(QUIZZES_API);
  return data;
};

export const findQuiz = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const createQuizForCourse = async (courseId: string, quiz: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  console.log("📦 Quiz created (response):", response.data);
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return data;
};

export const deleteQuiz = async (id: string) => {
  const { data } = await axios.delete(`${QUIZZES_API}/${id}`);
  return data;
};

export const togglePublish = async (quizId: string) => {
  const { data } = await axios.put(`${QUIZZES_API}/${quizId}/toggle`);
  return data;
};

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

export const findQuestionsForQuiz = async (qid: string) => {
  const res = await axios.get(`${QUIZZES_API}/${qid}/questions`);
  return res.data;
};

export const deleteQuestion = async (qid: string, questionId: string) => {
  await axios.delete(`${QUIZZES_API}/${qid}/questions/${questionId}`);
};

