let {validoz, isValid, isValidByName} = require('validoz');

let field = {
    name: "Date",
    type: "date",
    value: '24/05/2020',
    dateFormat: 'dd/mm/yyyy',
    startDate: '08/02/2020',
    endDate: '24/05/2020',
};

let result = validoz(field);
console.log(result); // { field: 'Date', message: '' }
isValid(result); // true
isValidByName(result, 'Date'); // true