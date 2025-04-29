const api = require('../../utils/api');

describe('Brand', () => {
    test('GET /brands/:id should return one brand', async () => {
        const response = await api.get('/brand/1')
            .set('Authorization', `Bearer ${process.env.API_TOKEN}`);
        // console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
    });
});