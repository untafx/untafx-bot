const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '/news') {

       message.reply('Last News Update In 14/4/2019 : UntaFx has new post on @untafx Instagram! :)');

       }

});

client.on('message', message => {

    if (message.content === '/about') {

       embed=discord.Embed(title=test, description=hiii)
       embed.add_field(name=undefined, value=undefined, inline=False)
       await self.bot.say(embed=embed)

       }

});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
