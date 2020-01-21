const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;
const {directors, movies} = require('../../fakeDB/index');


const Movie = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director: {
            type: Director,
            resolve(parent, args) {
                console.log('PARENT: ', parent);
                return directors.find(director => director.id == parent.directorId);
            }
        }
    }),
});

const Director = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(Movie),
            resolve ( parent, args ) {
                 return movies.filter(movie => movie.directorId == parent.id)
            }
        }
    }),
});

module.exports = {
    Movie,
    Director
};
