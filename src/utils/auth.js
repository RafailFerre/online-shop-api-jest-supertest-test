const request = require('./api');
require('dotenv').config();


async function getAuthToken(email, password) {
  const response = await request
    .post('/user/login')
    .send({ email, password });

//   if (response.status !== 200) {
//     throw new Error(`Failed to login: ${response.status} ${response.body?.message || 'No message'}`);
//   }

  return response.body.token;
}

module.exports = { getAuthToken };