const News = require('../models/news');


exports.create = async (req, res) => {
 
  
  if (!req.body.title) {
    return res.status(404).send({
      message: "Title Cannot be Empty"
    });
  }
  
  const news = new News({
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    Image: req.body.Image,
    news: req.body.news,
    published: new Date()
  });
  await news.save()
    .then(news => {
      console.log({ news })
      res.send(news);
    })
    .catch(err => {
      res.status(505).send({
        message: err.message || "Some error occurred while creating the Movie."
      });
    });
};

exports.findAll = async (req, res) => {
  let news = await News.find({})
    .sort("-published")
  for (let i = 0; i < news.length; i++) {
    console.log(news[i].Read)
    if (news[i].Read == false && news[i].user == 0) {
      console.log("Data")

      res.json({
        success: true,
        count: news.length,
        data: news[i],
      });
    }
  }

};

exports.FindbyUser = async (req, res) => {
  const user = req.params.userId;
  let result = await News.find({ user: req.params.userId })
    .sort("-updatedAt")

  try {
    if (!result) {
      return res.status(404).send({
        message: "No News is found with that user"
      });
    }
    res.send(result)
  } catch (err) {
    return res.status(500).send({
      message: "Error retrieving News with this user id "
    });
  }
};

exports.findOne = (req, res) => {

  // Find note and update it with the request body
  News.findByIdAndUpdate(req.params.newsId, {
    Read: true,
    user: 1,
    updatedAt: new Date()
  }, { new: true })
    .then(news => {
      if (!news) {
        return res.status(404).send({
          message: "News not found with id " + req.params.newsId
        });
      }
      res.send(news);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "News not found with id " + req.params.newsId
        });
      }
      return res.status(500).send({
        message: "Error updating News with id " + req.params.newsId
      });
    });
};

