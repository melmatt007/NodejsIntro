var url = require('url');
var address = 'http://localhost:8080/default.html?year=2018&month=August'
var q = url.parse(address, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.html'
console.log(q.search); //returns '?year=2018&month=August'

var qdata = q.query; //returns an object: { year: 2018, month: 'August' }
console.log(qdata.month); //returns 'August'
console.log(qdata.year);