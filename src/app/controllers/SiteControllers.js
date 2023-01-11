const Course = require('../models/Course');
class SiteController {
    // Home
    index(req, res) {
        Course.find({});
        res.render('home');
    }
    search(req, res) {
        res.send('search');
    }
}
module.exports = new SiteController();
