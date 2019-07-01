const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generate = id => {
  const timestamp = new Date().getTime();

  return jwt.sign({ timestamp, id }, JWT_SECRET);
};

const verify = token => {
  token = token.split(' ')[1];
  let decoded = false;

  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    decoded = false;
  }

  return decoded;
};

const validate = (req, res) => {
  const token = req.headers.authorization;
  const decoded = verify(token);

  if (!decoded || !decoded.auth) {
    // Fail
  } else {
    // Success
  }
};

module.exports = {
  generate,
  verify,
  validate
};
