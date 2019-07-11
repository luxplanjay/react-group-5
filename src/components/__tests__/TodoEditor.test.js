import React from 'react';
import { shallow } from 'enzyme';
import TodoEditor from '../TodoEditor';

describe('TodoEditor', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<TodoEditor />);
  });

  it('renders an input and a button', () => {
    expect(wrapped.find('input[type="text"]').length).toBe(1);
    expect(wrapped.find('button[type="submit"]').length).toBe(1);
  });

  describe('events', () => {
    const todoText = 'new todo text';

    beforeEach(() => {
      const changeEventMock = {
        currentTarget: {
          value: todoText
        }
      };

      wrapped.find('input[type="text"]').simulate('change', changeEventMock);
      wrapped.update();
    });

    it('can enter text into an input', () => {
      expect(wrapped.find('input[type="text"]').prop('value')).toBe(todoText);
    });

    it('on form submit, input should get emptied', () => {
      expect(wrapped.find('input[type="text"]').prop('value')).toBe(todoText);

      const submitEventMock = {
        preventDefault: () => null
      };
      const props = {
        onSave: () => null
      };

      wrapped.setProps(props);
      wrapped.find('form').simulate('submit', submitEventMock);
      wrapped.update();
      expect(wrapped.find('input[type="text"]').prop('value')).toBe('');
    });
  });

  describe('callbacks', () => {
    it('onSave prop has been called on submit', () => {
      const submitEventMock = {
        preventDefault: () => null
      };

      const onSavePropMock = jest.fn();
      const props = {
        onSave: onSavePropMock
      };

      wrapped.setProps(props);
      wrapped.find('form').simulate('submit', submitEventMock);

      expect(onSavePropMock.mock.calls.length).toBe(1);
    });
  });
});
