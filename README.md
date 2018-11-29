![Alt text](img/logo.png?raw=true "Title")

DiscordBot

An javascript application using the discord.js, node.js and facebookchat API/DOCs.js

https://github.com/Schmavery/facebook-chat-api
https://discord.js.org/#/
https://nodejs.org/en/download/

The use of this bot is to pull all converstations from facebook chats and put them into a single server, each chat will have it's own channel that can be used to recive messages and reply to these messages.

As of right now if you want to use this bot all you need to do it create a token.js file and add your token to the file as 
let discordToken = "TokenHere";

exports.discordToken = discordToken;

The Facebook intergration is not implmented yet as this is currently in a proof of concept right now, making sure all funcanality is possible before full work starts.