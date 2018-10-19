

exports.reply = function readMessage(message){
    if (message.content.startsWith("ping")) { // checks if that message starts with "ping"
      message.channel.send("pong!"); // replied to message in the same channel with "Pong!"
    }
};

