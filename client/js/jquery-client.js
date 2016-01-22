var infoColor = '#888888';
var errorColor = 'red';
var messageColor = '#000000';
var nameColor = 'blue';

var formatMessage = function(user, message) {
  return '<span id = "posts" style="color: ' + nameColor + '">' + user + '</span>' +
    ': ' + message;
};

var postMessage = function (color, contents) {
  console.log('Error: jQuery not ready yet');
};

$(function() {
  postMessage = function(color, contents) {
    $('#posts').prepend('<tr><td id = "post"><span style="color: ' + color + '">' + 
                          contents + '</span></td></tr>');
  };

  $('#message-form').submit(function (event) {
    event.preventDefault();
    sendMessage($('#message').val()); // server messaging
    
    //client side messaging only
    postMessage('black', formatMessage('User', $('#message').val()));
    $('#message').val('');
  });
});
