import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

export default class Dropdown extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleToggle}
        >
          &#9776;
        </button>

        {isOpen && (
          <div className={styles.dropdown}>
            <ul className={styles.menu}>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
