const test = require('ava');
const sortBy = require('../../utils/sortBy');
const Persons = require('../../api/core/persons');
const Groups = require('../../api/core/groups');

test('sortBy:Persons', t => {
  t.plan(1);

  const testData = [ { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Full-Time',
    FirstName: 'Dan',
    LastName: 'Xerxes' },
  { PersonId: 3,
    Group: 'B',
    Salary: '12000.01',
    Status: 'Part-Time',
    FirstName: 'Alex',
    LastName: 'Hankle' },
  { PersonId: 2,
    Group: 'C',
    Salary: '500.00',
    Status: 'On-Leave',
    FirstName: 'Ben',
    LastName: 'Peters' } ];

  const persons = new Persons(testData);
  persons.persons = sortBy(persons.persons, 'FirstName');

  const actual = persons.persons;
  const expected = [ { PersonId: 3,
    Group: 'B',
    Salary: '12000.01',
    Status: 'Part-Time',
    FirstName: 'Alex',
    LastName: 'Hankle' },
  { PersonId: 2,
    Group: 'C',
    Salary: '500.00',
    Status: 'On-Leave',
    FirstName: 'Ben',
    LastName: 'Peters' },
  { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Full-Time',
    FirstName: 'Dan',
    LastName: 'Xerxes' } ];

  t.deepEqual(actual, expected);
});

test('sortBy:Groups', t => {
  t.plan(1);

  const testData = [ { Group: 'B',
    NewSalary: '13200.01',
    PercentIncrease: '10.0',
    PersonCount: 2,
    Salary: '22000.13' },
  { Group: 'A',
    NewSalary: '505.00',
    PercentIncrease: '1.0',
    PersonCount: 1,
    Salary: '500.00' },
  { Group: 'C',
    NewSalary: '505.00',
    PercentIncrease: '1.0',
    PersonCount: 1,
    Salary: '500.00' } ];

  let groups = new Groups(testData);
  groups.groups = sortBy(groups.groups, 'Group');

  const actual = groups.groups;
  const expected = [ { Group: 'A',
    NewSalary: '505.00',
    PercentIncrease: '1.0',
    PersonCount: 1,
    Salary: '500.00' },
  { Group: 'B',
    NewSalary: '13200.01',
    PercentIncrease: '10.0',
    PersonCount: 2,
    Salary: '22000.13' },
  { Group: 'C',
    NewSalary: '505.00',
    PercentIncrease: '1.0',
    PersonCount: 1,
    Salary: '500.00' } ];

  t.deepEqual(actual, expected);
});
