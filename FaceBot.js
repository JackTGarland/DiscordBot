const Discord = require("discord.js"); // General Discord functionality module
//const login = require("facebook-chat-api"); // FaceBook API module
const fbMessage = require('./fbMessage.js');
const client = new Discord.Client(); // Creates an instance of discord.js. Used to establish a connection to the discord service

// Initalization
var newChannel = 0;
client.login("Super secret token"); // login token  

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

});
};
client.on("message", (message) => { //when the client recives a message pass that message and do the following code
  if (message.author != "ping test"){ // check if the message is from the bot or someone else
 // get the message in current channel
   newChannel = fbMessage.reply(message);
   if (newChannel == 1){
       console.log("creating new cahnnel");
        var name = message.content; // stores the contens of the message body into name
        name = name.substr(name.indexOf(' ')+1);// removes the first word from name
        fbMessage.makeNewChannel(message, name); 
        makeNewChannel = 0;// sets it to 0 so it wont exacute again.
   };

  if (message.author != "ping test") { // get the message in current channel
    newChannel = fbMessage.reply(message);
    console.log(newChannel);

    if (newChannel == 1) {
      console.log("creating new cahnnel");
      var name = message.content;
      name = name.substr(name.indexOf(' ') + 1);
      fbMessage.makeNewChannel(message, name);
      makeNewChannel = 0;
    };

    if (message.content.startsWith("exit")) {
      message.channel.send("Shutting down."); // this line is not exacuting, dont understand why.
      console.log("shutting down!");
      close();
    };

    if (message.content.startsWith("list")) {
      var server;
      var cServer = message.guild.id; // gets the id of the current sever the message was sent from.
      server = client.guilds.get(cServer).channels.size;//list size of channels
      console.log(server);
      //fbMessage.channellList(message, server);
    };
  }
});

// Terminates the program
function close() {
  process.exit(1);
};