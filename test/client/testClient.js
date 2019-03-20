const test = require('ava');
const Client = require('../../api/client/client');

test('Client:options', t => {
  t.plan(4);

  const clientOptions = {
    baseURL: 'https://www.test.com',
    headers: {
      Pragma: 'no-cache',
      'Content-Type': 'text/html'
    },
    timeout: 20000
  };
  const retryOptions = {
    retries: 2,
    shouldResetTimeout: true
  };

  const client = new Client(clientOptions, retryOptions);

  t.is(client.client.defaults.headers.Pragma, 'no-cache');
  t.is(client.client.defaults.headers['Content-Type'], 'text/html');
  t.is(client.client.defaults.timeout, 20000);
  t.is(client.client.defaults.baseURL, 'https://www.test.com');
});
