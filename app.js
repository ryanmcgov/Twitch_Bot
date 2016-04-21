var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "CapitaahhBot",
		password: "oauth:ztkttj2rewy7s3nt15gleunq2cfx6z"
	},
	channels: ["Capitaahh"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
	client.action("Capitaahh", "aaaaaahhhhhhh");
});