class Persons {
  constructor (persons) {
    this.persons = persons;
  }

  // Merge data by shared property
  mergeBy (property) {
    this.persons = this.persons[0].map(item1 => ({
      ...this.persons[1].find(item2 => item2[property] === item1[property]),
      ...item1
    }));
  }

  // Remove by status
  removeByStatus (status) {
    this.persons = this.persons.filter(obj => obj.Status !== status);
  }

  // Modify merged data:  apply salary/increase updates, and sort by value
  modifyMerged (term, percentIncrease) {
    this.persons.map(obj => {
      let increase = percentIncrease[obj.Status];
      obj['NewSalary'] = obj.Group === term.Group ? term.Salary : (parseFloat(obj.Salary) + (parseFloat(obj.Salary) * (increase / 100))).toFixed(2);
      obj['PercentIncrease'] = obj.Group === term.Group ? term.Increase : increase;
      obj.Status = obj.Group === term.Group ? 'Terminated' : obj.Status;
      return obj;
    });
  }
}

module.exports = Persons;
