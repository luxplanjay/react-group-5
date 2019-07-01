const shortid = require('shortid');

const userDb = [];

const isUnique = email => !userDb.find(user => user.email === email);

const find = (email, password) => {
  const user = userDb.find(
    user => user.email === email && user.password === password
  );

  console.log('user: ', user);

  return user ? Promise.resolve(user) : Promise.reject('User not found');
};

const add = ({ name, email, password }) => {
  if (!isUnique(email)) {
    return Promise.reject('User with this email already exists');
  }

  const user = {
    id: shortid.generate(),
    name,
    email,
    password
  };

  userDb.push(user);

  return Promise.resolve(user);
};

const getById = id => {
  const user = userDb.find(user => user.id === id);

  return user ? Promise.resolve(user) : Promise.reject('User not found');
};

module.exports = {
  add,
  find,
  getById
};
