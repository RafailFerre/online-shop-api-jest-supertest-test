const supertest = require('supertest');
require('dotenv').config();

const request = supertest(process.env.API_BASE_URL);

module.exports = request;