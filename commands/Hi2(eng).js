const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "Hi!",
    execute(message){
        message.channel.send(`GuGu!:dove: Oh! Nice to Meet you, ${message.author.username}!`);
    }
}