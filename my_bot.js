const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {

  if(message.content === "/news"){

   // the robot answers pong!
   message.channel.send("Last news: UntaFX is have a new post on Instagram @UntaFX!!");
  
};

});

client.on("message", message => {

  if(message.content === "/hi"){

   // the robot answers pong!
   message.channel.send('Hello you!! im just a Bot :v');
  
};

});


client.login(process.env.BOT_TOKEN)
