const express = require('express');
const graphQlHttp = require('express-graphql');

const app = express();
const PORT = 3005;

app.use('/graphql', graphQlHttp({}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('server started and listen 3005 port!')
});

