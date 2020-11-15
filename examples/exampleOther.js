let {validoz, isValid, isValidByName} = require('validoz');

let {field} = require('./form.js');
let result = validoz(field);
console.log(result); 

isValid(result); // false
/*
Returns: 
[
  { field: 'Full name', message: '' },
  { field: 'Email address', message: 'Email address is invalid' },
  { field: 'Age', message: 'Age must be between 18 and 60' },
  { field: 'Best friend', message: 'Best friend value is wrong' },
  {
    field: 'Password',
    message: 'Password must contain at least one numberic, one upper case, one lower case characters and the length at least 6 characters'
  }
]
*/
isValid(result); // false
isValid(result[0]); // "Full name", true
isValidByName(result, 'Full name'); // true
isValidByName(result, 'Email address'); // false
isValidByName(result, 'Password'); // false
