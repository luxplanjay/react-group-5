import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import TodoEditor from '../TodoEditor';
import TodoList from '../TodoList';

describe('App component', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('renders a TodoEditor', () => {
    expect(wrapped.find(TodoEditor).length).toBe(1);
  });

  it('does not render a TodoList when there are no todos', () => {
    wrapped.setState({ todos: [] });

    expect(wrapped.find(TodoList).length).toBe(0);
  });

  it('renders a TodoList when there is at least one todo', () => {
    wrapped.setState({ todos: ['first todo'] });

    expect(wrapped.find(TodoList).length).toBe(1);
  });
});
