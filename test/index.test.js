const request = require('supertest');
const { createApp } = require('../index');

describe('App HTTP Tests', () => {
  test('GET / should return hello world message', async () => {
    const app = createApp();
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toContain('Hola Mundo');
  });

  test('GET /health should return OK', async () => {
    const app = createApp();
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});