const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;
const {DirectorModel, MovieModel} = require('../../models/index');


const Movie = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director: {
            type: Director,
            resolve(parent, args) {
                return DirectorModel.findById(parent.directorId);
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
                 return MovieModel.find({ directorId: parent.id });
            }
        }
    }),
});

module.exports = {
    Movie,
    Director
};
