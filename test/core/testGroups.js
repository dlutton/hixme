const test = require('ava');
const Groups = require('../../api/core/groups');

test('Groups:groupBy', t => {
  t.plan(2);

  const testData = [ { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Terminated',
    FirstName: 'Jim',
    LastName: 'Xerxes',
    NewSalary: 0,
    PercentIncrease: 0 },
  { PersonId: 2,
    Group: 'A',
    Salary: '12000.01',
    Status: 'Part-Time',
    FirstName: 'Jason',
    LastName: 'Hankle',
    NewSalary: '13200.01',
    PercentIncrease: 10 },
  { PersonId: 3,
    Group: 'C',
    Salary: '500.00',
    Status: 'On-Leave',
    FirstName: 'Jason',
    LastName: 'Peters',
    NewSalary: '505.00',
    PercentIncrease: 1 } ];

  let groups = new Groups(testData);
  groups.groupBy('Group');

  const actual = groups.groups;
  const expected = [ { Group: 'A',
    NewSalary: '13200.01',
    PercentIncrease: '10.0',
    PersonCount: 2,
    Salary: '22000.13' },
  { Group: 'C',
    NewSalary: '505.00',
    PercentIncrease: '1.0',
    PersonCount: 1,
    Salary: '500.00' } ];

  t.is(actual.length, 2);
  t.deepEqual(actual, expected);
});
