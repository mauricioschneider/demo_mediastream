/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('videos/index', { title: 'Videomanager v.0.0.1a' });
};

exports.create = function(req, res) {
    res.render('videos/form');
}

exports.view = function(req, res) {
    res.send("respond with a resource");
}

exports.post = function(req, res) {

}