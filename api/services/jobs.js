var jwt = require('jwt-simple');
var jobs = [
    'Cook',
    'Super Hero',
    'Unicorn Whisperer',
    'Toast Inspector'
];
module.exports = function(req, res){

    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, 'shhh...');

    if(!payload.sub){
        return res.status(401).send({
          message: 'Authentication failed.'
        });
    }

    if(!req.headers.authorization) {
      return res.status(401).send({
        message: 'You are not authorized to view this page.'
      });
    }

    res.json(jobs);
}
