

exports.reply = function readMessage(message){
    if (message.content.startsWith("ping")) { // checks if that message starts with "ping"
    console.log("heard ping");
      message.channel.send("pong!"); // replied to message in the same channel with "Pong!"
      return 0;
    }
    else if(message.content.startsWith("make")){
      console.log("make heard");
      //console.log(message.content);
      return 1;
     
    }
};

exports.makeNewChannel = function createNewChannel(message , name){
  console.log("function called)");
  //var server = message.guild;
  message.guild.createChannel(name, "text");
  //server.createChannel(name, "texxt");
};
