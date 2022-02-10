const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
  name: 'unban',
  execute(message){
      if(!message.member.hasPermission("BAN_MEMBERS")){
        return message.reply("You Don't Have Permission of Ban User\nIf you think it's error, you can request permission to Admin")
        }
      let User = message.members.first()
      if(!User) return message.reply("CANNOT FIND USER")
      message.guild.members.unban(User)
      message.Channel.send(`GuGu! I Unbanned ${User} Successfully!`)
  }
}