const notes = require("./2-notes");
const _ = require("lodash");


const age = notes.age;
const result = notes.addNumber(2,age);
console.log(age);
console.log(result);

const arr = ["person", "person", "name", "name", 1, 3, 3, 1, 2, 2 , "2", "2"];
const res = _.uniq(arr);
console.log(res);

console.log(_.isString("deep"));
console.log(_.isString(2));