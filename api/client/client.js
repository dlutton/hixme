const axios = require('axios');
const axiosRetry = require('axios-retry');

class Client {
  constructor (clientOptions, retryOptions) {
    this.clientOptions = clientOptions;
    this.retryOptions = retryOptions;
    this.client = this.getClient();
  }

  // Set options and return client
  getClient () {
    const client = axios.create(this.clientOptions);
    axiosRetry(client, this.retryOptions);
    return client;
  }

  // Connect to client
  connect (path, conf = {}) {
    return this.client
      .get(path, conf)
      .then(resp => resp)
      .catch(error => error);
  }
}

module.exports = Client;
