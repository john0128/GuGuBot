const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "비둘기봇",
    execute(message){
        message.reply(`저 부르셨어요? 구구?:dove:`);
    }
}