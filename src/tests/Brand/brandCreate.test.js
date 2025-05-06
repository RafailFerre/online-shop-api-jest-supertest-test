const request = require('../../utils/api');
const { getAuthToken } = require('../../utils/auth');
require('dotenv').config();

describe('CREATE BRAND', () => {
  let adminToken;
  let userToken;

  beforeAll(async () => {
    // Get tokens
    adminToken = await getAuthToken(process.env.EMAIL_ADMIN, process.env.PASSWORD_ADMIN);
    userToken = await getAuthToken(process.env.EMAIL_USER, process.env.PASSWORD_USER);
  });

  test('POST /brand should create a new brand for ADMIN', async () => {
    const response = await request
      .post('/brand')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ name: 'Huawei' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
  });

  test('POST /brand should fail create with existing name', async () => {
    const response = await request
      .post('/brand')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ name: 'Huawei' });

    expect(response.status).toBe(400);
    expect(response.body.error).toHaveProperty('message', 'Brand with this name already exists');
  });

  test('POST /brand should fail for non-ADMIN user', async () => {
    const response = await request
      .post('/brand')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ name: 'Dayson' });

    expect(response.status).toBe(403);
    expect(response.body.error).toHaveProperty('message', 'Access denied. Required roles: ADMIN');
  });

  test('POST /brand should fail without token', async () => {
    const response = await request
      .post('/brand')
      .send({ name: 'Dayson' });

    expect(response.status).toBe(401);
    expect(response.body.error).toHaveProperty('message', 'No token provided');
  });
});