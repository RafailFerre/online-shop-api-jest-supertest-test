const request = require('../../utils/api');
// const axios = require('axios');

describe('GET ALL BRAND', () => {
  test('GET /brands should return list of brands', async () => {
    const response = await request.get('/brand')

    // console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
  });
});










// describe('Brand API', () => {
//     it('Get /brands should return list of brands', async () => {
//         const res = await axios.get(`${process.env.API_BASE_URL}/brand`);

//         console.log(res.data);
//         expect(res.status).toBe(200);
//         expect(res.data).toBeInstanceOf(Array);
//         expect(res.data[0]).toHaveProperty('id');
//         expect(res.data[0]).toHaveProperty('name');
//     });
// });