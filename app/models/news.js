const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        subtitle: {
            type: String
        },
        author: {
            type: String
        },
        Read: {
            type: Boolean
        },
        published: {
            type: Date
        },
        Image: {
            type: String
        },
        news: {
            type: String
        }
    }
);
const News = mongoose.model('news', NewsSchema);
module.exports = News;