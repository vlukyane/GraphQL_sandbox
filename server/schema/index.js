const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } = graphql;
const {Movie, Director} = require('../schema/Types/index');
const Movies = require('../models/movie');
const Directors = require('../models/director');

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: Movie,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Movies.findById(args.id)
            },
        },
        director: {
            type: Director,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Directors.findById(args.id);
            },
        },
        movies: {
            type: new GraphQLList(Movie),
            resolve(parent, args) {
                console.log(Movies.find({}));
                return Movies.find({})
            },
        },
        directors: {
            type: new GraphQLList(Director),
            resolve(parent, args) {
                return Directors.find({})
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
