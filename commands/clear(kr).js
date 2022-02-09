const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "clear",
    execute(message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have Permission.\nif you think it is bug, you can get help from moderater") //이거는 혹시 모를 테러로 인한 관리자 권한만 할 수 있게 하는것, 관리자 권한 없이 하려고 하면 이 줄 지우세요
        if(isNaN(args[0])) return message.reply("Please Enter Available Value!")
        const MessageCount = parseInt(args[0])
        message.channel.bulkDelete(MessageCount + 1).then((count) => {
            message.reply(`GuGu! Deleted ${count.size} Messages Successfully.`)
        }).catch((error) => {
            message.reply(`Error Occured!\n${error}`)
        })
    }
}