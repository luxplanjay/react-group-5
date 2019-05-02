import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import SearchForm from './SearchForm';
import CategorySelector from './CategorySelector';
import * as articleAPI from '../services/article-api';

/*
 * Функция-помошник, которая возвращает массив объектов
 * такого формата, который ожидает компонент
 */
const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { category: prevCategory } = prevState;
    const { category: nextCategory } = this.state;

    if (prevCategory !== nextCategory) {
      this.fetchArticles(nextCategory);
    }
  }

  fetchArticles = query => {
    this.setState({ isLoading: true });

    articleAPI
      .fetchArticles(query)
      .then(({ data }) => this.setState({ articles: mapper(data.hits) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    return (
      <div>
        <SearchForm onSubmit={this.fetchArticles} />
        <CategorySelector
          options={['html', 'css', 'javascript', 'react']}
          value={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    );
  }
}
