const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

module.exports = api;