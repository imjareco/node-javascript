const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const { JWT } = process.env;

exports.checkToken = (req = request, res = response, next) => {
  const token = req.header('session-token');
  const { _id: idUserLogged } = req.query;

  if (!token) {
    return res.status(401).send({
      message: 'The request does not have the authentication header.',
    });
  }

  //   token = authorization.replace(/['"]+/g, '');

  // Token decode
  try {
    const payload = jwt.verify(token, JWT);
    if (payload.exp <= new Date().getUTCDate()) {
      return res.status(403).send({ message: 'The token has expired.' });
    } else if (payload._id !== idUserLogged) {
      return res.status(403).send({ message: 'The token has been suplanted.' });
    }
  } catch (err) {
    console.error(err);
    return res.status(403).send({ message: 'The token is not valid.' });
  }

  // Exit middleware
  next();
};
