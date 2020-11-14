# Validoz

Validoz is both Client and Server side form field validator.

### Installation

```sh
$ npm install validoz
```

### Sample code

```sh
let {validoz, isValid} = require('validoz');
let fields = [
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
        value: 12,
        min: 18,
    }
]
let result = validoz(fields);
console.log(result); 
/* 
result: 
[
    { field: 'Full name', message: '' },
    { field: 'Email address', message: '' },
    { field: 'Age', message: 'Age must be at least 18' }
] */
console.log(isValid(result)); // false
```
Whenever a field message value be empty string ('') means no validation error.
In the example above we put fields in array and all the fields message shoul be be emptry string '' to isValid() function returns true otherwise it returns false.
### Single field example
Here is example of single object field instead of array of objects.
```sh
let {validoz, isValid} = require('validoz');
let field = {
    name: "Full name",
    type: "fullname",
    value: 'John doe'
};
let result = validoz(field);
console.log(result); // { field: 'Full name', message: '' }
console.log(isValid(result)); // true
```
### Types
Here is the types of field.

| name | Description |
| ------ | ------ |
| `text` | Normal string. |
| `fullname` | string should contain at least 2 words with 3 characters for each of the words and separated by space. It can contain more than one word.|
| `username` | Like Instagram username. |
| `word` | alphabet characters |
| `number` | An integer number |
| `date` | Example `21/03/2020` string |
| `time` | Example `05:12` string|

### Options

| name | Description |
| ------------- | ------ |
| `name` | Field name |
| `value` | Field value |
| `type` | Field type |
| `required` | `Boolean`. If field required |
| `min` and `max` | Minumum and Maximum of type number. Each of them can be passed alone. |
| `minDigits` and `maxDigits` | Minumum and Maximum digits of type number. Each of them can be passed alone. |
| `minLength` and `maxLength` | Minimum and Maximum length of the string types. |
| `shouldBe` | A field value and shouldBe value to be equal |
| `dateFormat` | String values of `'mm/dd/yyyy'`, `'mm-dd-yyyy'`, `'dd/mm/yyyy'`, `'dd-mm-yyyy'`, `'yyyy/mm/dd'` and `'yyyy-mm-dd'` |
| `shouldBe` | A field value and shouldBe value to be equal |



### Date example
```sh
let {validoz, isValid} = require('validoz');

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
```

### Examples demo
- [Demo 1](d)
- [Demo 2]()


### Author
Kamyar Lajani

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
