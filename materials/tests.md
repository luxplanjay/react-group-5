# Tests

## App

### renders a TodoEditor

- mock App
- expect to find 1 TodoEditor

### does not render a TodoList when there are no todos

- mock App
- set state to `todos: []`
- expect to find 0 TodoList

### renders a TodoList when there is at least one todo

- mock App
- set state to `todos: ['first todo']`
- expect to find 1 TodoList

## TodoEditor

### renders an input and a button

- mock TodoEditor
- expect to find 1 input[type="text"]
- expect to find 1 button[type="submit"]

### can enter text into an input

- find input[type="text"]
- simulate "change" event with simulate()
- provide a fake event object and feed text to input
- force the component to update with update()
- assert that input value has changed with prop()

### on form submit, input should get emptied

- find input[type="text"]
- simulate "change" event with simulate()
- provide a fake event object and feed text to input
- find form
- simulate "submit" event
- provide a fake event object and feed props to component
- force component to update
- assert that input value has changed

### event.preventDefault and onSave prop has been called

- find form
- simulate "submit" event
- provide a fake event object and feed props to component
- assert that mocks were called once

## TodoList

### renders a li element for each received item

- setup props
- find every li
- assert that li.length === items.length



