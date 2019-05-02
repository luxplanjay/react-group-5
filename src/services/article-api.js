import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

/* eslint-disable-next-line */
export const fetchArticles = (query = 'react') => axios.get(BASE_URL + query);
