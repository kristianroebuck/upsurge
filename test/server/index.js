import test from 'tape';
import request from 'supertest';
import app from '../../src/server/app';


test('/ returns a 200 response', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
