let {validoz, isValid} = require('../validoz');

let field = {
    name: "Date",
    type: "date",
    value: '24/05/2020',
    dateFormat: 'dd/mm/yyyy',
    startDate: '08/02/2020',
    endDate: '24/05/2020',
};

let result = validoz(field); // { field: 'Date', message: '' }
console.log(result); 
console.log(isValid(result)); // true