import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchArticles = () => {
  return axios.get(`/articles`).then(response => response.data);
};

export const fetchArticleWithId = id => {
  return axios.get(`/articles/${id}`).then(response => response.data);
};
