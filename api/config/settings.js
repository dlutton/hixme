const settings = {
  client: {
    paths: [
      '/code-exercise/persons',
      '/code-exercise/salaries'
    ],
    options: {
      baseURL: 'https://dev-api.hixme.com',
      headers: {
        Pragma: 'no-cache'
      },
      timeout: 20000
    },
    retryOptions: {
      retries: 2,
      shouldResetTimeout: true
    }
  },
  dataOptions: {
    personKey: 'PersonId',
    groupKey: 'Group',
    personSortBy: 'LastName',
    groupSortBy: 'Group',
    percentIncrease: {
      'Full-Time': 20,
      'Part-Time': 10,
      'On-Leave': 1
    },
    termination: {
      Group: 'E',
      Salary: 0.00,
      Increase: 0.0
    },
    removal: {
      status: 'Retired'
    }
  }
};

module.exports = settings;
