class Totals {
  constructor (totals) {
    this.totals = totals;
  }

  // Total up values
  total () {
    let totals = this.totalsObj(0, 0, 0, 0);
    this.totals.forEach(obj => {
      totals.PersonCount += obj.PersonCount;
      totals.Salary += parseFloat(obj.Salary);
      totals.NewSalary += parseFloat(obj.NewSalary);
      totals.PercentIncrease += parseFloat(obj.PercentIncrease);
    });
    this.totals = totals;
  }

  // Totals Object
  totalsObj (personCount, salary, newSalary, percentIncrease) {
    return {
      PersonCount: personCount,
      Salary: salary,
      NewSalary: newSalary,
      PercentIncrease: percentIncrease
    };
  }
}

module.exports = Totals;
