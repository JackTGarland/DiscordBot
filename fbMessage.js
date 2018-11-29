//TODO: -JACK: Explain what the purpose of this module is exactly. General FaceBook functionality? Channel functionality? Why are these functions grouped together. What makes them simular
// functions used when a message from FB is recived.
module.exports = {
  createNewChannel,
  reply: readMessage,
  channellList: ClList
}; // exports all functions

const fs = require('fs');

// Check to see if track.txt exists on start-up. Created if not.
fs.readFile("track.txt", (err)=>{
  if(err){
    if(err.code === "ENOENT"){
      // Create file if not already exists
      fs.writeFile("track.txt", "0", 0, 1, (err)=>{
        if (err) throw err;
      });
    } else {
      throw err;
    }
  }
  
});

function readMessage(message, client) { // this function is used for testing purposes.
  message.content = message.content.toUpperCase();
  if (message.content.startsWith("PING")) { // checks if that message starts with "ping"
    console.log("heard ping");
    message.channel.send("pong!"); // replied to message in the same channel with "Pong!"
    return 0;
  } else if (message.content.startsWith("MAKE")) {
    console.log("make heard");
    //console.log(message.content);
    return 1;

  } else if (message.content.includes("OWO")) {
    message.channel.send("Stop it Shaun");
    
    // Read the current value in track.txt
    fs.readFile('track.txt', function read(err, data) {

      if (err) throw err;
      let trackFileData = data;
      
      trackFileData++;
      fs.writeFile("track.txt", trackFileData, 0, trackFileData.length, function(err){
        if (err) throw err;
        message.channel.send("you have said OwO " + trackFileData + " times!");
      });

    });
    
  } else if (message.content.startsWith("FIND")) {
    console.log("heard find");
    return 2;
  } else if (message.content.startsWith("EXIT")) {
    message.channel.send("Shutting down");
    console.log("shutting down!");
    close();
  } else if (message.content.startsWith("LIST")) {
    var name = message.content; // stores the contens of the message body into name
    name = name.substr(name.indexOf(' ') + 1); // removes the first word from name
    if (name == "GUILDS") {
      message.channel.send("posted in log");
      console.log(client.guilds);
    } else if (name == "MESSAGE") {
      message.channel.send("posted in log");
      console.log(message);
    } else if (name == "CHANNELS") {
      message.channel.send("posted in log");
      console.log(client.guilds.get(message.guild.id).channels);
    }
  } else if (message.content.startsWith("HELP")) {
    console.log("help called");
    message.channel.send("Type 'ping' to hear 'pong'.");
    message.channel.send("Type 'make X' to make a new text channel where X is its name.");
    message.channel.send("Type 'find X' to look for a channel with the name of X.");
    message.channel.send("Type 'list X' to list the infromation about guilds, message or channels in the console.");
    message.channel.send("Type 'exit' to stop the bot.");
  };
};

function createNewChannel(message, name) {
  console.log("creating new channel");
  //var server = message.guild;
  message.guild.createChannel(name, "text"); // makes a new channel with the name of name and sets its type to text
  message.channel.send("new text channel made");
  //server.createChannel(name, "texxt");
};

exports.fbMessage = function fbRecived(fbmessage) { // not in use yet please ignore.
  var cLength = 0;
  uName = fbmessage.User.name
  for (channel in server.channels) {
    cLength++
  };
  for (i = 0; i <= cLength; i++) {
    if (channel[i].name == uName) {
      channel.get(channelID).send(fbmessage.body);
    }
  };
};

function ClList(client, message, sname) {

  var cServer = message.guild.id;
  if (client.guilds.get(cServer).channels.find(channel => channel.name == sname) != null) { // gets all information from the channels map and then comapres the channel.name to the name given from the command, null means there is no channel.
    console.log("match found");
    message.channel.send("match found");
  } else { // if not channel is found (if statment returns null) then no match is found.
    console.log("no match found");
    message.channel.send("no match found");
    createNewChannel(message, sname);
  };
};

// Terminates the program
function close() {
  process.exit(1);
};