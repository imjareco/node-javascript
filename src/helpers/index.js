const jwt = require('jsonwebtoken');

const { JWT } = process.env;

const tokenBuilder = (uuid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uuid };

    jwt.sign(
      payload,
      JWT,
      {
        expiresIn: '1h',
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  tokenBuilder,
};
