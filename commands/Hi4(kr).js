const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "안녕",
    execute(message){
        message.channel.send(`${message.author.username}님 안녕하세여~ 구구!:dove:`);
    }
}