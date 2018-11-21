const Discord = require("discord.js"); // used to get the required discord functionality
const client = new Discord.Client();// openes a client connection with discord
//const login = require("facebook-chat-api"); // FB API used to connect to the FB chat system
const fbMessage = require('./fbMessage.js');
var newChannel = 0;

client.on("ready", () => {
    console.log("I am ready!"); // outputs to the command line
  });
  client.login("SuperSecreatToken"); // login token    

//fbLogin();
function fbLogin (){
login({email: "email", password: "Password"}, (err, api) => {
    if(err) return console.error(err);
    else {
        console.log("FB Login succesful");
    }

});
};

client.on("message", (message) => { // get the message in current channel
   newChannel = fbMessage.reply(message);
   console.log(newChannel);
   if (newChannel == 1){
       console.log("creating new cahnnel");
        var name = message.content;
        name = name.substr(name.indexOf(' ')+1);
        fbMessage.makeNewChannel(message, name);
        makeNewChannel = 0;
   };
  });
  function close (){
    process.exit(1);// exits teh command line and shuts down the bot
  };  
  client.on("message", (message) => {
    if (message.content.startsWith("exit")) {
      message.channel.send("Shutting down."); // this line is not exacuting, dont understand why.
      console.log("shutting down!");
      close(); // call's the close function
    }
  });