import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchArticles = (category = null) => {
  const url = category ? `/articles?category=${category}` : '/articles';

  return axios.get(url).then(response => response.data);
};

export const fetchArticleWithId = id => {
  return axios.get(`/articles/${id}`).then(response => response.data);
};
