module.exports = (app) => {
    const News = require('../controller/news.controllers');

    // Create a new News
    app.post('/news', News.create);

    // Retrieve all News
    app.get('/news', News.findAll);

    
    app.put('/news/:newsId', News.findOne);

    app.get('/news/:userId', News.FindbyUser);
};