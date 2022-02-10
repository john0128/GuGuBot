const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
  name: '밴',
  execute(message){
      if(!message.member.hasPermission("BAN_MEMBERS")){
        return message.reply("당신은 유저를 밴하는 권한이 없으므로 이 명령어를 쓸 수 없습니다.\n이것이 오류라고 생각한다면 어드민에게 문의하세요")
        }
      let User = message.mentions.members.first()
      if(!User) return message.reply("유저를 찾을 수 없습니다!")
      if(User.hasPermission("BAN_MEMBERS")) return message.reply("이 유저는 차단할 수 없습니다!")
      User.ban()
      const embed = new Discord.MessageEmbed()
      embed.setColor("#A62019")
      embed.addField(`구구!:dove: 성공적으로 차단되었습니다!`,`:x: ${User}이/가 차단되었습니다!`)
      return message.channel.send(embed)
      //message.Channel.send(`${User}을 성공적으로 밴했습니다. 구구!`)
  }
}