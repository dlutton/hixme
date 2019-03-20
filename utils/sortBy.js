// sortBy takes in an arrayObject and val to sortby
const sortBy = (arrayObject, val) => arrayObject.sort((a, b) => a[val].localeCompare(b[val]));

module.exports = sortBy;
