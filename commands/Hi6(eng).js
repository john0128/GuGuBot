const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "Hello!",
    execute(message){
        message.channel.send(`GuGu! Hey ${message.author.username}`);
    }
}