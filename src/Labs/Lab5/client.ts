import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axiosWithCredentials.post(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axiosWithCredentials.post(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axiosWithCredentials.post(TODOS_API);
  return response.data;
};
export const removeTodo = async (todo: any) => {
  const response = await axiosWithCredentials.post(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};
export const createTodo = async () => {
  const response = await axiosWithCredentials.post(`${TODOS_API}/create`);
  return response.data;
};
export const postTodo = async (todo: any) => {
  const response = await axiosWithCredentials.post(`${TODOS_API}`, todo);
  return response.data;
};
export const deleteTodo = async (todo: any) => {
  const response = await axiosWithCredentials.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};
export const updateTodo = async (todo: any) => {
  const response = await axiosWithCredentials.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};
