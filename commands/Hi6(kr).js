const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "ㅎㅇㅎㅇ",
    execute(message){
        message.channel.send(`${message.author.username}님 잘 주무셨나요?`);
    }
}