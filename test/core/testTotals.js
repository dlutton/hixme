const test = require('ava');
const Totals = require('../../api/core/totals');

test('Totals:total', t => {
  t.plan(2);

  const testData = [ { Group: 'A',
    NewSalary: '13200.01',
    PercentIncrease: '10.0',
    PersonCount: 2,
    Salary: '22000.13' },
  { Group: 'C',
    NewSalary: '505.00',
    PercentIncrease: '1.0',
    PersonCount: 1,
    Salary: '500.00' } ];

  let totals = new Totals(testData);
  totals.total();

  const actual = totals.totals;
  const expected = {
    NewSalary: 13705.01,
    PercentIncrease: 11,
    PersonCount: 3,
    Salary: 22500.13
  };

  t.is(typeof (actual), 'object');
  t.deepEqual(actual, expected);
});
