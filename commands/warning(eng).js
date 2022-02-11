const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');
const { execute } = require('./clear(kr)');
const warnings = JSON.parse(fs.readFileSync("./warning.json","utf-8"))

module.exports = {
    name: "warn",
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        if(args[0] == null) return message.reply(embed.setColor("#F8C300").setTitle("Usage of warn command").addFields({name:"Usage",value:"^warn <TYPE> <Target>"},{name:"Check Warning"}
        ,{name:"TYPE",value:"\'give\' : give warning \n\'remove\' : remove warning\n\'check\' : check warning"}).setColor("#fc4732"))
        const target = message.mentions.members.first()
        switch(args[0]){
            case "give":
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("ERROR!\n:x:You don't have Permission of ADMIN")
                if(!message.mentions.members.first()) return message.reply(embed.setTitle("ERROR").setDescription("Please Designate Member!").addField("warn - Usage of Command","^warn give <Target>\nPlease Mention Target <Target>").setColor("#fc4732"))
                if(!warnings[target.id]) warnings[target.id] = 0;
                warnings[target.id]++
                fs.writeFile("./warning.json",JSON.stringify(warnings),(err)=>{
                    if(err) console.log(err)
                })
                var reason = "None";
                return message.reply(embed.setTitle("Complete!").setDescription(`I gave ${target.user.username} Warning Successfully!`).addFields({name:"warning reason",value:reason},
                {name:`${target.user.username}'s warning count`,value:`Warning Count : ${warnings[target.id]}`}))
            case "remove":
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("ERROR!\n:x:You don't have Permission of ADMIN")
                if(!message.mentions.members.first()) return message.reply(embed.setTitle("ERROR").setDescription("Please Designate Member!").addField("경고 - 명령어 사용법","^warn remove <Target>\n**Please Mention Target in <Target>**").setColor("#fc4732"))
                if(!warnings[target.id] || warnings[target.id] == 0) return message.reply(embed.setTitle("Error!").setDescription("This User don't have removable Warn!").setColor("#fc4732"))
                fs.writeFile("./warning.json",JSON.stringify(warnings),(err)=>{
                    if(err) return console.log(err) //https://youtu.be/6YZlLCpN8fc?t=744
                })
                warnings[target.id]--
                return message.reply(embed.setTitle("Complete").setColor("#00D166").addField(`Deleted ${target.user.username}'s Warning Successfully`,`${target.user.username}'s Warning Count': ${warnings[target.id]}`))
                case "check":
                    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Error Occured!\n:x:You don't have Administrator")
                    if(!message.mentions.members.first()) return message.reply(embed.setTitle("Error!").setDescription("Please Designate Member!"))
                    if(!warnings[target.id] || warnings[target.id] == 0) return message.reply(embed.setTitle(`${target.user.username}'s Warning Count'`).setDescription(`Count : 0`).setColor("#0099e1"))
                    return message.reply(embed.setTitle(`${target.user.username}'s Warning Count'`).setDescription(`Count : ${warnings[target.id]}`).setColor("#0099e1"))       
        }
    }
}