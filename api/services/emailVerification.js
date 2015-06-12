var config = require('./config.js')
var _ = require ('underscore');
var fs = require('fs');
var jwt = require('jwt-simple');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var model = {
    verifyUrl:'http://localhost:3000/auth/verifyEmail?token=',
    title: 'Token Auth Demo',
    subTitle: 'We\'re glad you signed up!',
    body: 'Please verify your email address by clicking the button below.'

};

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

function getHtml(token){
    var path = './views/emailVerification.html';
    var html = fs.readFileSync(path, encoding = 'utf8');
    var template = _.template(html);
    model.verifyUrl += token;
    return template(model);
}

exports.send = function(email){
    var payload = {
      sub: email
    }
    var token = jwt.encode(payload, config.EMAIL_SECRET);

    var transporter = nodemailer.createTransport(smtpTransport({
        host:'mail.babalan.com',
        secure: true,
        auth: {
            user: 'something',
            pass: config.SMTP_PASSWORD
        }
    }))
}
