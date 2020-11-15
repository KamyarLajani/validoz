export let field = [
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
];