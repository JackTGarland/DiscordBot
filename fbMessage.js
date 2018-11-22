//TODO: -JACK: Explain what the purpose of this module is exactly. General FaceBook functionality? Channel functionality? Why are these functions grouped together. What makes them simular

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
  message.guild.createChannel(name, "text"); // makes a new channel with the name of name and sets its type to text
  //server.createChannel(name, "texxt");
};

exports.fbMessage = function fbRecived(fbmessage){ // not in use yet please ignore.
  var cLength = 0;
  uName = fbmessage.User.name
    for (channel in server.channels){
            cLength++
    };
  for (i = 0; i <= cLength; i++) {
    if (channel[i].name == uName){
      channel.get(channelID).send(fbmessage.body);
    }
  };
};

exports.channellList = function ClList(message){
  var cServer = message.guild.id; // gets the id of the current sever the message was sent from.
  server = client.guilds.get(cServer).channels.size;//list size of channels
  for (i=0;i <= server ;i++){
    //if()
  };
};
