const test = require('ava');
const app = require('../server');
const request = require('supertest');

test('Not Found:Error', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/api/nothing');

  t.is(res.status, 404);
  t.is(res.body.error.message, 'Not Found');
});
