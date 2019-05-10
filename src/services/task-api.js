import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchTasks = () => {
  return axios.get(`/tasks`).then(response => response.data);
};

export const postTask = task => {
  return axios.post(`/tasks`, task).then(response => response.data);
};

export const deleteTask = id => {
  return axios.delete(`/tasks/${id}`);
};

export const updateTask = (id, update) => {
  return axios.patch(`/tasks/${id}`, update).then(response => response.data);
};
