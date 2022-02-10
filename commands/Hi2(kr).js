const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "하이",
    execute(message){
        message.channel.send(`${message.author.username}님 반가워여! 구구!:dove:`);
    }
}