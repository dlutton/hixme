class Groups {
  constructor (groups) {
    this.groups = groups;
  }

  // Groupby provided property
  groupBy (property) {
    const obj = this.groups.reduce((acc, obj) => {
      let val = obj[property];
      if (!acc[val]) {
        acc[val] = this.group(val, 1, parseFloat(obj.Salary), parseFloat(obj.NewSalary), parseFloat(obj.PercentIncrease));
        return acc;
      }
      acc[val].PersonCount++;
      acc[val].Salary += parseFloat(obj.Salary);
      acc[val].NewSalary += parseFloat(obj.NewSalary);
      acc[val].PercentIncrease += obj.PercentIncrease;
      return acc;
    }, []);
    this.groups = Object.keys(obj).map(key => this.group(obj[key].Group, obj[key].PersonCount, obj[key].Salary.toFixed(2), obj[key].NewSalary.toFixed(2), obj[key].PercentIncrease.toFixed(1)));
  }

  // Group Object
  group (group, personCount, salary, newSalary, percentIncrease) {
    return {
      Group: group,
      PersonCount: personCount,
      Salary: salary,
      NewSalary: newSalary,
      PercentIncrease: percentIncrease
    };
  }
}

module.exports = Groups;
