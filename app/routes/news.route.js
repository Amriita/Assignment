module.exports = (app) => {
    const News = require('../controller/news.controllers');

    // Create a new News
    
    app.post('/news', News.create);
    console.log("NEWS")

    // Retrieve all movie
    //app.get('/news', News.findAll);

    //Retrieve a single movie with movieeId
    // app.get('/news/:moviesId', movies.findOne);

    // // Update a  moviee with movieeId
    // app.put('/movies/:moviesId', movies.update);

    // // Delete a Note with noteId
    // app.delete('/movies/:moviesId', movies.delete);
};