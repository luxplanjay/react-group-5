import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const List = styled.ul`
  position: fixed;
  bottom: 8px;
  right: 8px;
`;

const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #29b6f6;
  color: #fff;
  padding: 16px 24px;
  border-radius: 3px;
  margin: 0;
  cursor: pointer;
  margin-top: 4px;
`;

const Message = styled.p`
  font-size: 20px;
  margin: 0;
  margin-right: 8px;
  user-select: none;
`;

const NotificationList = ({ items, onRemove }) =>
  createPortal(
    <List>
      {items.map(({ id, text }) => (
        <Notification key={id} onClick={() => onRemove(id)}>
          <Message>{text}</Message>
        </Notification>
      ))}
    </List>,
    document.getElementById('notification-root')
  );

export default NotificationList;
