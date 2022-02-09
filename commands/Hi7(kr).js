const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "구구",
    execute(message){
        message.channel.send(`${message.author.username}님 하이! 구구~`);
    }
}