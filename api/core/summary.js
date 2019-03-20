class Summary {
  constructor (persons, groups, totals) {
    this.persons = persons;
    this.groups = groups;
    this.totals = totals;
  }

  // Summary Object
  summaryObj () {
    return {
      Persons: this.persons,
      Groups: this.groups,
      Totals: this.totals
    };
  }
}

module.exports = Summary;
