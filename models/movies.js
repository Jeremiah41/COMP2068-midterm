/**
 * Created by jeremiah on 2016-10-19.
 */

// Link to mongoose
var mongoose = require('mongoose');

// New shema

var moviesSchema = new mongoose.Schema({
    title: {
        type : String,
        required : 'title cannot be null'
    },
    studio: {
        type : String,
        required : 'studio cannot be null'
    },
    year: {
        type : Int,
        required : 'year cannot be null'
    }
});

module.exports = mongoose.model('movies', moviesSchema)