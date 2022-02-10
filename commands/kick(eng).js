const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: 'kick',
    execute(message){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Don't have a Permission of Kick User\nIf you think it's error, you can request permission to Admin")
        if(message.mentions.members.first()){
            try{
                message.mentions.members.first().kick().then(()=>{
                    const embed = new Discord.MessageEmbed()
                    embed.setColor("#0099E1")
                    embed.addField(`GuGu!:dove: Successful Kick!`,`:soccer:${message.mentions.members.first()} is Kicked!`)
                    return message.channel.send(embed)
                    //return message.channel.send(`GuGu! Kick ${message.mentions.members.first()} Successfully`)
                }).catch((error)=>{
                    return message.channel.send(`Error Occured!\n${error}`)
                })
            }catch(error){
                return message.channel.send("Bot doesn't have Permission of Kick User")
            }
        }else{
            return message.channel.send("Please Mention User Who Do you want to kick!")
        }
    }
}