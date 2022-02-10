const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "ㅎㅇ",
    execute(message){
        message.channel.send(`${message.author.username}님 만나뵈서 반갑습니다! 구구!:dove:`);
    }
}