mongoose = require('mongoose');

require('./user');
require('./category');

var Schema = mongoose.Schema;

var VideoSchema = new Schema({
    title: {type: String, required: true},
    is_published: {type: Boolean, required: true, default: 0},
    duration: {type: String, required: true}, // in format 00:00:00
    created: {type: Date, default: Date.now},
    category: {type: Schema.Types.ObjectId, ref: "CategorySchema"},
    author: {type: Schema.Types.ObjectId, ref: "UserSchema"}
});

Video = mongoose.model('Video', VideoSchema);

Video.on('error', function() {
    console.log('\n\nDATABASE ERROR <Mongoose.Model> | <Item>: \n', arguments, '\n\n');
});