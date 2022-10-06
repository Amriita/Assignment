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
            type: Boolean,
            default:false
        },
        published: {
            type: Date
        },
        Image: {
            type: String
        },
        news: {
            type: String
        },
        user:{
            type: Number,
            default:0
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
);
const News = mongoose.model('news', NewsSchema);
module.exports = News;