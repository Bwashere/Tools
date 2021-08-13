const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js') // Make sure to add a config.js file I will have an example for that below to
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('config.token');
