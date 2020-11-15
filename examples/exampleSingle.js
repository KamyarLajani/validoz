let {validoz, isValid, isValidByName} = require('validoz');

let field = {
    name: "Full name",
    type: "fullname",
    value: 'John doe'
};
let result = validoz(field);
console.log(result); // { field: 'Full name', message: '' }
isValid(result); // true
isValidByName(result, 'Full name'); // true