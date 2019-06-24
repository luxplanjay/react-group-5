import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthContextProvider } from './contexts/authentication';
import { NotificationProvider } from './contexts/notification';
import './index.css';

ReactDOM.render(
  <AuthContextProvider>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </AuthContextProvider>,
  document.getElementById('root'),
);
