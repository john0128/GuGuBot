const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "userinfo",
    execute(message) {
        if(!message.mentions.members.first()) return message.reply("Please mention User!")
        const user = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
        const createdAt = user.user.createdAt
        embed.setTitle(`GuGu!:dove: ${user.user.tag}'s information`)
        embed.setColor('#00D166')
        embed.setThumbnail(user.user.avatarURL())
        if(!user.user.avatarURL()) embed.setThumbnail(user.user.defaultAvatarURL)
        embed.addField("ID",user.user.id)
        embed.addField("Join Date",`${createdAt.getFullYear()}-${createdAt.getMonth()}-${createdAt.getDay()}-${createdAt.getHours()}-${createdAt.getMinutes()}`)
        return message.reply(embed)
    }
}