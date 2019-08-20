import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

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

  it('should not be able to register with duplicated emails', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Lucas Sallada',
        email: 'lucas@email.com',
        password_hash: '123456',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Lucas Sallada',
        email: 'lucas@email.com',
        password_hash: '123456',
      });

    expect(response.status).toBe(400);
  });
});
