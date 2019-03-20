const test = require('ava');
const Persons = require('../../api/core/persons');
const data = require('./data');

test('Persons:mergeBy', async t => {
  t.plan(2);

  let persons = new Persons(data);
  persons.mergeBy('PersonId');

  let expected = [ { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Full-Time',
    FirstName: 'Jim',
    LastName: 'Xerxes' },
  { PersonId: 2,
    Group: 'A',
    Salary: '12000.01',
    Status: 'Part-Time',
    FirstName: 'Jason',
    LastName: 'Hankle' },
  { PersonId: 3,
    Group: 'A',
    Salary: '8000.80',
    Status: 'On-Leave',
    FirstName: 'Sara',
    LastName: 'Beezus' } ];

  let actual = persons.persons;

  t.is(actual.length, 3);
  t.deepEqual(actual, expected);
});

test('Persons:removeByStatus', async t => {
  t.plan(2);

  let testData = [ { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Full-Time',
    FirstName: 'Jim',
    LastName: 'Xerxes' },
  { PersonId: 2,
    Group: 'A',
    Salary: '12000.01',
    Status: 'Part-Time',
    FirstName: 'Jason',
    LastName: 'Hankle' } ];

  let persons = new Persons(testData);
  persons.removeByStatus('Part-Time');

  let actual = persons.persons;
  let expected = [ { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Full-Time',
    FirstName: 'Jim',
    LastName: 'Xerxes' } ];

  t.is(actual.length, 1);
  t.deepEqual(actual, expected);
});

test('Persons:modifyMerged', t => {
  t.plan(9);

  const testData = [ { PersonId: 1,
    Group: 'A',
    Salary: '10000.12',
    Status: 'Full-Time',
    FirstName: 'Jim',
    LastName: 'Xerxes' },
  { PersonId: 2,
    Group: 'B',
    Salary: '12000.01',
    Status: 'Part-Time',
    FirstName: 'Jason',
    LastName: 'Hankle' },
  { PersonId: 3,
    Group: 'C',
    Salary: '500.00',
    Status: 'On-Leave',
    FirstName: 'Jason',
    LastName: 'Peters' } ];

  const termination = {
    Group: 'A',
    Salary: 0.00,
    Increase: 0.0
  };

  const percentIncrease = {
    'Full-Time': 20,
    'Part-Time': 10,
    'On-Leave': 1
  };

  let persons = new Persons(testData);
  persons.modifyMerged(termination, percentIncrease);

  t.is(persons.persons[0].Status, 'Terminated');
  t.is(persons.persons[1].Status, 'Part-Time');
  t.is(persons.persons[2].Status, 'On-Leave');

  t.is(persons.persons[0].PercentIncrease, 0);
  t.is(persons.persons[1].PercentIncrease, 10);
  t.is(persons.persons[2].PercentIncrease, 1);

  t.is(persons.persons[0].NewSalary, 0);
  t.is(persons.persons[1].NewSalary, '13200.01');
  t.is(persons.persons[2].NewSalary, '505.00');
});
