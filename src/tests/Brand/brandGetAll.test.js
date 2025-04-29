const api = require('../../utils/api');
// require('dotenv').config();
// const axios = require('axios');

describe('Brand', () => {
  test('GET /brands should return list of brands', async () => {
    const response = await api.get('/brand')
    //   .set('Authorization', `Bearer ${process.env.API_TOKEN}`);
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