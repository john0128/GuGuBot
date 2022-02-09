const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "하이염",
    execute(message){
        message.channel.send(`${message.author.username}님 방가방가! 구구!`);
    }
}