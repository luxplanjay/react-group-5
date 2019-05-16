/* eslint-disable */
import React, { Component } from 'react';
import queryString from 'query-string';
import ArticleList from '../components/ArticleList';
import CategorySelector from '../components/CategorySelector';
import * as articleAPI from '../services/articles-api';

const categories = [
  {
    value: 'health',
    label: 'Health',
  },
  {
    value: 'technology',
    label: 'Technology',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
];

const getCategoryWithValue = (allCategories, value) =>
  allCategories.find(c => c.value === value);

const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;

export default class ArticlesPage extends Component {
  state = { items: [] };

  componentDidMount() {
    const { location } = this.props;
    const category = getCategoryFromLocation(location);

    articleAPI.fetchArticles(category).then(items => this.setState({ items }));
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(this.props.location);

    // console.log('prevCategory: ', prevCategory);
    // console.log('nextCategory: ', nextCategory);

    if (prevCategory !== nextCategory) {
      articleAPI
        .fetchArticles(nextCategory)
        .then(items => this.setState({ items }));
    }
  }

  handleCategoryChange = opt => {
    if (opt) {
      return this.props.history.push({
        ...this.props.location,
        search: `category=${opt.value}`,
      });
    }

    this.props.history.push({
      ...this.props.location,
      search: '',
    });
  };

  render() {
    const { items } = this.state;
    const { location } = this.props;
    const qsCategory = getCategoryFromLocation(location);
    const selectedCategory = getCategoryWithValue(categories, qsCategory);

    return (
      <div>
        <h1>Articles Page</h1>
        <CategorySelector
          options={categories}
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        />
        <ArticleList items={items} />
      </div>
    );
  }
}
