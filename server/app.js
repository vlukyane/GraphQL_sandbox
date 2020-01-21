const schema = require('./schema/index');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://vlukyane:123@cluster0-kilpf.mongodb.net/test?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const dbConnection = mongoose.connection;
dbConnection.once('open', () => console.log('CONNECTED TO DB!'));
const Movies = require('./models/movie');
console.log()
const app = express();
const PORT = 3005;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});
