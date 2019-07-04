require('dotenv').config();

const express = require('express');
const { Router } = require('express');
const corsMiddlware = require('cors');
const expressJwt = require('express-jwt');
const userDb = require('./utils/db');
const token = require('./utils/token');

const app = express();

app.use(express.json());
app.use(corsMiddlware());

// Routing
const router = Router();

const requireAuth = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'user'
});

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  userDb
    .add({ name, email, password })
    .then(({ id, name, email }) => {
      res.status(201).json({
        user: { id, name, email },
        token: token.generate(id)
      });
    })
    .catch(error => {
      res.status(409).json({
        message: error
      });
    });
});

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  userDb
    .find(email, password)
    .then(({ id, name, email }) => {
      res.status(200).json({
        user: { id, name, email },
        token: token.generate(id)
      });
    })
    .catch(error => {
      res.status(404).json({
        message: error
      });
    });
});

router.get('/current', requireAuth, (req, res) => {
  const { id } = req.user;

  userDb
    .getById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        message: error
      });
    });
});

router.post('/signout', (req, res) => {
  const t = req.headers.authorization;
  const decoded = token.verify(t);

  if (decoded) {
    // Все классно, удаляем токен из редиски или leveldb или еще откуда
    res.status(200).json({
      message: 'Logout success'
    });
  } else {
    // Токен не валидный, отправляем репорт опсам чтобы разобрались кто пытался кинуть нам грязный токен
    res.status(500).json({
      message: 'Gachi is manly!'
    });
  }
});

app.use('/auth', router);

app.listen(4040, () => {
  console.log('Server is listening on port 4040');
});
