const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: 'kick',
    execute(message){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("당신은 유저를 추방하는 권한이 없으므로 이 명령어를 쓸 수 없습니다.\n이것이 오류라고 생각한다면 어드민에게 문의하세요")
        if(message.mentions.members.first()){
            try{
                message.mentions.members.first().kick().then(()=>{
                    return message.channel.send(`성공적으로 ${message.mentions.members.first()}을 추방했습니다. 구구!`)
                }).catch((error)=>{
                    return message.channel.send(`에러가 발생했습니다!\n${error}`)
                })
            }catch(error){
                return message.channel.send("봇에게 유저를 추방할 권한이 없습니다")
            }
        }else{
            return message.channel.send("당신이 추방하고 싶은 사람을 멘션하세요!")
        }
    }
}