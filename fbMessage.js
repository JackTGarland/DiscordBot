//TODO: -JACK: Explain what the purpose of this module is exactly. General FaceBook functionality? Channel functionality? Why are these functions grouped together. What makes them simular
// functions used when a message from FB is recived.
exports.reply = function readMessage(message){ // this function is used for testing purposes.
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
    else if(message.content.includes("OwO")){
      message.channel.send("*FooBar*");
    }
    else if(message.content.startsWith("find")){
      console.log("heard find");
      return 2;
    }
    else if (message.content.startsWith("exit")) {
      message.channel.send("Shutting down");
      console.log("shutting down!");
      close();
    };
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

exports.channellList = function ClList(client, message, sname){
  var isMatch = false;
  var cServer = message.guild.id;
    if (client.guilds.get(cServer).channels.find(channel => channel.name == sname) != null){ // gets all information from the channels map and then comapres the channel.name to the name given from the command, null means there is no channel.
      isMatch = true;
      console.log("match found");
      message.channel.send("match found");
    }
    else { // if not channel is found (if statment returns null) then no match is found.
      console.log("no match found");
      message.channel.send("no match found");
    };
  return isMatch;
  };

// Terminates the program
function close() {
  process.exit(1);
};