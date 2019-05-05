/* eslint-disable */

import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import * as articleAPI from '../services/article-api';
import withFetch from './hoc/withFetch';
import Togglable from './Togglable';
import Fetcher from './Fetcher';

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
  render() {
    return (
      <div>
        <Fetcher url="https://hn.algolia.com/api/v1/search?query=react">
          {({ data, isLoading, error }) => {
            let articles = [];

            if (data.hits) {
              articles = mapper(data.hits);
            }

            return (
              <>
                {error && <ErrorNotification text={error.message} />}
                {isLoading && <Loader />}
                {articles.length > 0 && (
                  <Togglable>
                    {({ on, onToggle }) => (
                      <>
                        <button onClick={onToggle}>{on ? '🖕' : '👇'}</button>
                        {on && <ArticleList items={articles} />}
                      </>
                    )}
                  </Togglable>
                )}
              </>
            );
          }}
        </Fetcher>
      </div>
    );
  }
}

// export default withFetch('https://hn.algolia.com/api/v1/search?query=react')(
//   App,
// );
