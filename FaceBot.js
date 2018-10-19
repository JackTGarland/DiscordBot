const Discord = require("discord.js"); // used to get the required discord functionality
const client = new Discord.Client();// openes a client connection with discord
const login = require("facebook-chat-api"); // FB API used to connect to the FB chat system
const fbMessage = require('./fbMessage.js');

client.on("ready", () => {
    console.log("I am ready!"); // outputs to the command line
  });
  client.login("SuperSecreatToken"); // login token    

fbLogin();
function fbLogin (){
login({email: "email", password: "Password"}, (err, api) => {
    if(err) return console.error(err);
    else {
        console.log("FB Login succesful");
    }

});
};

client.on("message", (message) => { // get the message in current channel
    fbMessage.reply(message);
  });