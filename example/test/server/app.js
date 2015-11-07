import test from 'tape';
import request from 'supertest';
import app from '../../src/server/app';


test('POST /sign-auth-v2 returns a 200 response', assert => {
  const stringToSign = 'POST \n';

  request(app)
    .post('/sign-auth-v2')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify({stringToSign}))
    .expect(200)
    .end((err, res) => {
      assert.error(err);
      assert.end();
    });
});

test('POST /sign-auth-v2 returns a signature', assert => {
  const stringToSign = 'POST \n';

  request(app)
    .post('/sign-auth-v2')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify({stringToSign}))
    .expect(res => {
      assert.equal(res.text, 'tvTnVFgmrgMn40zWwH6n1byqV18=');
    })
    .end((err, res) => {
      assert.error(err);
      assert.end();
    });
});

test('POST /sign-auth-v2 returns a 400 response when data is not supplied', assert => {
  request(app)
    .post('/sign-auth-v2')
    .set('Content-Type', 'application/json')
    .expect(400)
    .end((err, res) => {
      assert.error(err);
      assert.end();
    })
});

test('POST /sign-auth-v4 returns a 200 response', assert => {
  const stringToSign = 'POST \n';

  request(app)
    .post('/sign-auth-v4')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify({stringToSign}))
    .expect(200)
    .end((err, res) => {
      assert.error(err);
      assert.end();
    });
});

test('POST /sign-auth-v4 returns a signature', assert => {
  const stringToSign = 'POST \n';

  request(app)
    .post('/sign-auth-v4')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify({stringToSign}))
    .expect(res => {
      assert.equal(res.text, 'g9HANtsma931ZcjtrUda5s1A5uUBKEJI21vvBKyKQ2E=');
    })
    .end((err, res) => {
      assert.error(err);
      assert.end();
    });
});

test('POST /sign-auth-v4 returns a 400 response when data is not supplied', assert => {
  request(app)
    .post('/sign-auth-v4')
    .set('Content-Type', 'application/json')
    .expect(400)
    .end((err, res) => {
      assert.error(err);
      assert.end();
    })
});
