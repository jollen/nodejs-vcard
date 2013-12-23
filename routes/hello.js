
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('hello');
};

exports.jollen = function(req, res){
  res.render('jollen');
};

exports.hi = function(req, res){
  res.render('hi');
};