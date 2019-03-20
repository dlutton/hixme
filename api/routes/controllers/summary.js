const client = require('../../service/client');
const settings = require('../../config/settings');
const Persons = require('../../core/persons');
const Groups = require('../../core/groups');
const Totals = require('../../core/totals');
const Summary = require('../../core/summary');
const sortBy = require('../../../utils/sortBy');

let promises = settings.client.paths.map(path => client(path, settings.client.options, settings.client.retryOptions));

// Return summary
const summary = () =>
  Promise.all(promises)
    .then(data => update(data))
    .catch(err => err);

// Update data based on settings
const update = (data) => {
  let persons = new Persons(data);
  persons.mergeBy(settings.dataOptions.personKey);
  persons.removeByStatus(settings.dataOptions.removal.status);
  persons.modifyMerged(settings.dataOptions.termination, settings.dataOptions.percentIncrease);
  persons.persons = sortBy(persons.persons, settings.dataOptions.personSortBy);

  let groups = new Groups(persons.persons);
  groups.groupBy(settings.dataOptions.groupKey);
  groups.groups = sortBy(groups.groups, settings.dataOptions.groupSortBy);

  let totals = new Totals(groups.groups);
  totals.total();

  let summary = new Summary(persons.persons, groups.groups, totals.totals);
  return summary.summaryObj();
};

module.exports = summary;
