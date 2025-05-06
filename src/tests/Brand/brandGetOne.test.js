const request = require('../../utils/api');

describe('GET ONE BRAND', () => {
    test('GET /brands/:id should return one brand', async () => {
        const response = await request.get('/brand/1')

        console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
    });
});