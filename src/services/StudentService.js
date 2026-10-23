
import api from "../api/api";

export const getStudents = () => {
  return api.get("/students");
};

export const addStudent = (student) => {
  return api.post("/students", student);
};

export const deleteStudent = (id) => {
  return api.delete(`/students/${id}`);
};

export const getStudentsById = (id) => {
  return api.get(`/students/${id}`);
};

export const updateStudent = (id, student) => {
  return api.put(`/students/${id}`, student);
};
