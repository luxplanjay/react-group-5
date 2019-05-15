import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import * as articleAPI from '../services/articles-api';
import Article from './Article';

export default class ArticlesPage extends Component {
  state = { items: [] };

  componentDidMount() {
    articleAPI.fetchArticles().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Articles Page</h1>
        <ArticleList items={items} />
        {/* <Route path={`${this.props.match.path}/:id`} component={Article} /> */}
      </div>
    );
  }
}
