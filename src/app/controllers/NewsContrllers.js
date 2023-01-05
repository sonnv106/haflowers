class NewsController {
  index(req, res) {
    res.render("search");
  }
}
module.exports = new NewsController();
