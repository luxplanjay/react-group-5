import React, { Component } from 'react';
import faker from 'faker';
import List from './List/List';
import Button from './Button/Button';
import Menu from './Menu/Menu';

export default class App extends Component {
  state = {
    items: [],
  };

  addItem = () => {
    this.setState(state => ({
      items: [
        ...state.items,
        { id: faker.random.uuid(), text: faker.lorem.words(5) },
      ],
    }));
  };

  removeItem = id => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <>
        <Menu />
        <hr />
        <Button label="Add Item" onClick={this.addItem} />
        <hr />
        <List items={items} onDelete={this.removeItem} />
      </>
    );
  }
}
