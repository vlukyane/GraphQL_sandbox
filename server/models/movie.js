const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    genre: String,
    directorId: String
});
const Movies = mongoose.model('Movie', movieSchema);
Movies.find().then(data => console.log(data));
module.exports = mongoose.model('Movie', movieSchema);
