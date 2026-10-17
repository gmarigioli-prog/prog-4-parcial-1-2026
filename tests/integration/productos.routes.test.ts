import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { makeApp } from '../../src/app';

describe('GET /productos/:id', () => {
  let app: ReturnType<typeof makeApp>;

  beforeEach(() => {
    app = makeApp(':memory:');
  });

  it('devuelve 200 y el producto cuando el id existe', async () => {
    const res = await request(app).get('/productos/1');
    expect(res.status).toBe(200);
    expect(res.body.nombre).toBe('Expreso Pocillo Brasil');
  });

  it('devuelve 404 cuando el id no existe', async () => {
    const res = await request(app).get('/productos/112');
    expect(res.status).toBe(404);
  });
});