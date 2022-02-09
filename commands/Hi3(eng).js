const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "hi",
    execute(message){
        message.channel.send(`GuGu! Hello? ${message.author.username}`);
    }
}