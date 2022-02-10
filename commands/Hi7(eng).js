const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "hello",
    execute(message){
        message.channel.send(`GuGu!:dove: Welcome! ${message.author.username}`);
    }
}