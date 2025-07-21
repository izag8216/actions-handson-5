const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return JSON response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('randomNumbers');
  });
});
