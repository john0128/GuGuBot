const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "청소",
    execute(message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("권한이 없습니다") //이거는 혹시 모를 테러로 인한 관리자 권한만 할 수 있게 하는것, 관리자 권한 없이 하려고 하면 이 줄 지우세요
        if(isNaN(args[0])) return message.reply("가능한 값을 입력하세요")
        const MessageCount = parseInt(args[0])
        message.channel.bulkDelete(MessageCount + 1).then((count) => {
            const embed = new Discord.MessageEmbed()
            embed.setColor("#00C09A")
            embed.addField("구구!:dove: 메세지 청소 성공!",`:white_check_mark: ${count.size}개의 메시지를 성공적으로 없앴습니다`)
            return message.channel.send(embed)
        }).catch((error) => {
            message.reply(`문제 발생!\n${error}`)
        })
    }
}