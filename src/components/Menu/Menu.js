import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './Menu.module.css';
import slideTransition from '../../transitions/slide.module.css';

export default class Menu extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={css.container}>
        <button
          type="button"
          className={css.button}
          onClick={this.toggleDropdown}
        >
          &#9776;
        </button>

        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={slideTransition}
          unmountOnExit
        >
          <div className={css.dropdown}>
            <ul className={css.list}>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
