const Discord = require("discord.js"); // General Discord functionality module
//const login = require("facebook-chat-api"); // FaceBook API module
const fbMessage = require('./fbMessage.js');
const tokens = require("./token.js");
const client = new Discord.Client(); // Creates an instance of discord.js. Used to establish a connection to the discord service

// Initalization
var newChannel = 0;
client.login(tokens.discordToken); // login token  

client.on("ready", () => {
  console.log("I am ready!");
});

//fbLogin();
function fbLogin (){ // facebook login functions not needed right now.
login({email: "email", password: "Password"}, (err, api) => {
    if(err) return console.error(err);
    else {
      console.log("FB Login succesful");
    }
  })
};

client.on("message", (message) => { //when the client recives a message pass that message and do the following code
  if (message.author.username != "ping test"){ // check if the message is from the bot or someone else
 // get the message in current channel
   newChannel = fbMessage.reply(message);
   if (newChannel == 1){
       console.log("creating new cahnnel");
        var name = message.content; // stores the contens of the message body into name
        name = name.substr(name.indexOf(' ')+1);// removes the first word from name
        fbMessage.makeNewChannel(message, name); 
        makeNewChannel = 0;// sets it to 0 so it wont exacute again.
   };

    if (message.content.startsWith("exit")) {
      message.channel.send("Shutting down."); // this line is not exacuting, dont understand why.
      console.log("shutting down!");
      close();
    };

  }
});

/**
 * Checks if a channel has already been created
 * Returns true if already exists. return's false if doesn't exist.
 * 
 * @param {*} channelName New channel name. Used to check if it exists
 */
function checkIfChannelExists(message, channelName){
  let isMatch = false;
  client.guilds.get(message.guild.id).channels.forEach(function(value, key, map){
    if(value.name.toString() == channelName.toString()){ //TODO: Find how to exit loop after it's found
      isMatch = true;
    }
  });
  return isMatch;
}

// Terminates the program
function close() {
  process.exit(1);
};