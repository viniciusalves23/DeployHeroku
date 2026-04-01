const request = require('supertest');
const app = require('../src/app');

describe('Testes de API e Healthcheck', () => {
  it('Deve retornar status 200 e UP no /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
  });
});