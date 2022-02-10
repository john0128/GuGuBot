const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
  name: 'ban',
  execute(message){
      if(!message.member.hasPermission("BAN_MEMBERS")){
        return message.reply("You Don't Have Permission of Ban User\nIf you think it's error, you can request permission to Admin")
        }
      let User = message.mentions.members.first()
      if(!User) return message.reply("CANNOT FIND USER")
      if(User.hasPermission("BAN_MEMBERS")) return message.reply("You Can't Ban This User!")
      User.ban()
      const embed = new Discord.MessageEmbed()
      embed.setColor("#A62019")
      embed.addField(`GuGu!:dove: Successful Ban!`,`:x: ${User} is Banned!`)
      return message.channel.send(embed)
      //message.Channel.send(`GuGu! I banned ${User} Successfully!`)
  }
}