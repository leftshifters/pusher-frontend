
/*
 * GET home page.
 */

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '52225',
  key: 'b4abe14bca2de9d60a16',
  secret: '1d0a301323bc3de327f4'
});

exports.index = function(req, res){
  res.render('index', { title: 'Pusher' });
};


exports.push = function(req, res) {

  var channel = req.body.channel;
  var eventName = req.body.event;
  var msg = req.body.message;

  console.log(req.body);

  // pusher.trigger('test_channel', 'my_event', {
  //   "message": "hello world"
  // });

  pusher.trigger(channel, eventName, { "message": msg });

  res.redirect('/');
};