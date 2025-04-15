import axios from "axios";
axios.defaults.withCredentials = true;

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};
export const createAssignment = async (courseId: string, assignment: any) => {
  const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return data;
};
export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

export const findAssignment = async (aid: string) => {
  const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${aid}`);
  return data;
};


// import axios from "axios";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// export const fetchAllCourses = async () => {
//   const { data } = await axios.get(COURSES_API);
//   return data;
// };
// export const deleteCourse = async (id: string) => {
//     const { data } = await axios.delete(`${COURSES_API}/${id}`);
//     return data;
//   };
//   export const updateCourse = async (course: any) => {
//     const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
//     return data;
//   };
//   export const findModulesForCourse = async (courseId: string) => {
//     const response = await axios
//       .get(`${COURSES_API}/${courseId}/modules`);
//     return response.data;
//   };
//   export const createModuleForCourse = async (courseId: string, module: any) => {
//     const response = await axios.post(
//       `${COURSES_API}/${courseId}/modules`,
//       module
//     );
//     return response.data;
//   };
    

// import axios from "axios";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// export const fetchAllAssignments = async () => {
//   const { data } = await axios.get(ASSIGNMENTS_API);
//   return data;
// };

// export const deleteAssignment = async (id: string) => {
//   const { data } = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
//   return data;
// };

// export const findAssignment = async (assignmentId: string) => {
//     const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
//     return response.data;
//   };

//   export const updateAssignment = async (assignment: any) => {
//     const { data } = await axios.put(
//       `${REMOTE_SERVER}/api/assignments/${assignment._id}`,
//       assignment
//     );
//     return data;
//   };
  

// export const findAssignmentsForCourse = async (courseId: string) => {
//   const response = await axios
//   .get(`${COURSES_API}/${courseId}/assignments`);
//   return response.data;
// };

// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//   const response = await axios.post(
// `${COURSES_API}/${courseId}/assignments`, 
//   assignment);
//   return response.data;
// };
