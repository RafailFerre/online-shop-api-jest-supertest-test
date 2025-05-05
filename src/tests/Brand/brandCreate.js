const request = require('../../utils/request');

describe('Brand', () => {
    test('POST /brands should create a new brand', async () => {
        const response = await request.post('/brand')
            .set('Authorization', `Bearer ${process.env.API_TOKEN}`)
            .send({ name: 'New Brand' });
        // console.log(response.body);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
    });
});