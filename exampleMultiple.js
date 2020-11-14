let {validoz, isValid} = require('./validoz');

let field = [
    {
        name: "Full name",
        type: "fullname",
        value: 'John doe'
    },
    {
        name: "Email address",
        type: "email",
        value: 'example@gmail.com'
    },
    {
        name: "Age",
        type: "number",
        value: '',
        min: 18,
    }
]
let result = validoz(field);
console.log(result); 
/* [
    { field: 'Full name', message: '' },
    { field: 'Email address', message: '' },
    { field: 'Age', message: 'Age must be at least 18' }
] */
console.log(isValid(result)); // false