
var socket = io.connect('http://localhost:5000');

var handle = document.getElementById('handle');
var	message = document.getElementById('message');
var	btn = document.getElementById('send');
var	output = document.getElementById('output');
var	output = document.getElementById('output');

//Send events
btn.addEventListener('click', function() {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

message.addEventListener('keypress', function() {
	socket.emit('typing', {
		handle: handle.value
	});
});

//Listen events
socket.on('chat', function(data) {
	feedback.innerHTML = ''
	output.innerHTML += '<p><strong>' + data.handle + '</strong>' + ': ' + data.message + '</p>';
});

socket.on('typing', function(data) {
	feedback.innerHTML = '<p><em>' + data.handle + ' is typing a message...</em></p>';
});