const Course = require('../models/Course');
const {multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /news
    index(req, res, next) {
        // ;
        // res.json({
        //     name: 'test'
        // });
        Course.find({})
            .then(courses => { 
                res.render('home',{ 
                    courses: multipleMongooseToObject(courses) });
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
