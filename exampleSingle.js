let {validoz, isValid} = require('./validoz');

let field = {
    name: "Full name",
    type: "fullname",
    value: 'John doe'
};
let result = validoz(field);
console.log(result); // { field: 'Full name', message: '' }
console.log(isValid(result)); // true