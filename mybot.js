const Discord = require("discord.js"); // used to get the required discord functionality
const client = new Discord.Client();// openes a client connection with discord
 
client.on("ready", () => {
  console.log("I am ready!"); // outputs to the command line
});
 
client.on("message", (message) => { // get the message in current channel
  if (message.content.startsWith("ping")) { // checks if that message starts with "ping"
    message.channel.send("pong!"); // replied to message in the same channel with "Pong!"
  }
});
client.on("message", (message) => {
    if (message.content.startsWith("exit")) {
      message.channel.send("Shutting down."); // this line is not exacuting, dont understand why.
      console.log("shutting down!");
      close(); // call's the close function
    }
  });
 
function close (){
  process.exit(1);// exits teh command line and shuts down the bot
};
client.login("NTAxMDM0NTA5NDAwMjc2OTk4.DqoHiw.cwKyUPxpfY4UQ4rP17iHCzRr8YE"); // login token