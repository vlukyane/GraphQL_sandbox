const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } = graphql;
const {movies, directors} = require('../fakeDB/index');
const {Movie, Director} = require('../schema/Types/index');

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: Movie,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id);
            },
        },
        director: {
            type: Director,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return directors.find(director => director.id == args.id);
            },
        },
        movies: {
            type: new GraphQLList(Movie),
            resolve(parent, args) {
                return movies;
            },
        },
        directors: {
            type: new GraphQLList(Director),
            resolve(parent, args) {
                return directors;
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
