const Discord = require("discord.js"); // General Discord functionality module
//const login = require("facebook-chat-api"); // FaceBook API module
const fbMessage = require('./fbMessage.js');
const auth = require("./token.js");
const client = new Discord.Client(); // Creates an instance of discord.js. Used to establish a connection to the discord service

// Initalization
var result = 0;
client.login(auth.discordToken); // login token  

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
   result = fbMessage.reply(message, client);
   if (result == 1){
       console.log("creating new cahnnel");
        var name = message.content; // stores the contens of the message body into name
        name = name.substr(name.indexOf(' ')+1);// removes the first word from name
        fbMessage.createNewChannel(message, name); 
        result = 0;// sets it to 0 so it wont exacute again.
   }
   else if (result == 2){
     var name = message.content;
    name = name.substr(name.indexOf(' ')+1);// removes the first word from name
    fbMessage.channellList(client, message, name);
    result = 0;
   };
  }
});