import React, { createContext, useState } from 'react';
import shortid from 'shortid';
import NotificationList from '../components/NotificationList';

export const notificationContext = createContext();

export const NotificationProvider = props => {
  const [messages, setMessages] = useState([]);

  const addMessage = text => {
    const message = {
      id: shortid.generate(),
      text
    };

    setMessages(prevMessages => [...prevMessages, message]);
  };

  const removeMessage = id => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message.id !== id)
    );
  };

  return (
    <notificationContext.Provider value={{ addMessage }}>
      {props.children}
      {messages.length > 0 && (
        <NotificationList items={messages} onRemove={removeMessage} />
      )}
    </notificationContext.Provider>
  );
};
