const Client = require('../client/client');

// Return promised data from the client
const client = (path, clientOptions, retryOptions) =>
  new Client(clientOptions, retryOptions)
    .connect(path)
    .then(resp => resp.data)
    .catch(err => err);

module.exports = client;
