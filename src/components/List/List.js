import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Button from '../Button/Button';
import styles from './List.module.css';
import popTransition from '../../transitions/pop.module.css';

const List = ({ items, onDelete }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {items.map(item => (
      <CSSTransition
        key={item.id}
        timeout={200}
        unmountOnExit
        classNames={popTransition}
      >
        <li className={styles.item}>
          {item.text}
          <Button label="Delete" onClick={() => onDelete(item.id)} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default List;
