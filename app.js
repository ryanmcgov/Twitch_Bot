var tmi = require('tmi.js');
var streamer = "Capitaahh";

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
	channels: [streamer]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
	client.action(streamer, "aaaaaahhhhhhh");
});

client.on("chat", function(channel, user, message, self) {
	if (!self) {
		var split = message.toLowerCase().split(" ");

		switch (split[0]) {
			case "!mods":
				client.mods("channel").then(function(data) {
					for (var i = 0; i <= data.length; i++) {
						var data = user["display-name"] || user["username"];
				   		 client.action(streamer, data);
					};
				    
				}).catch(function(err) {
				   
				});
				client.action(streamer, "modlist");
				break;
			case "!bot":
				client.action(streamer, "beep boop");
				break;
		}
	}
})
