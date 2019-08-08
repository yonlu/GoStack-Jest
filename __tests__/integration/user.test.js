import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Lucas Sallada',
        email: 'lucas@email.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
