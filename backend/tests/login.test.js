
const request = require('supertest');
const app = require('../index'); 

describe('POST /login', () => {
  it('should return 200 and a success message with valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Login successful');
  });

  it('should return 401 with invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        username: 'invaliduser',
        password: 'invalidpassword',
      });
    expect(response.status).toBe(401);
  });
});
