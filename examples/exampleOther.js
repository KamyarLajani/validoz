let {validoz, isValid, isValidByName} = require('index');

let field = [
    {
        name: "Full name",
        type: "text",
        value: 'Hello world',
        minLength: 6
    },
    {
        name: "Email address",
        type: "email",
        value: 'example@.com'
    },
    {
        name: "Age",
        type: "number",
        value: 12,
        min: 18,
        max: 60,
    },
    {
        name: "Best friend",
        type: "text",
        value: 'Doe',
        equal: 'John' // value must be John
    },
    {
        name: "Password",
        type: "password", // you can also pass text if you don't want regex pattern to be conditioned
        value: '123456',
        minLength: 6,
        maxLength: 30,
    }
]
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
