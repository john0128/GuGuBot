const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');
const { execute } = require('./clear(kr)');
const warnings = JSON.parse(fs.readFileSync("./warning.json","utf-8"))

module.exports = {
    name: "경고",
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        if(args[0] == null) return message.reply(embed.setColor("#F8C300").setTitle("경고 명령어 사용법").addFields({name:"사용법",value:"^warn <TYPE> <Target>"},{name:"경고 확인"}
        ,{name:"TYPE",value:"\'부여\' : 경고를 부여합니다\n\'회수\' : 경고를 회수합니다\n\'확인\' : 경고를 확인합니다"}).setColor("#fc4732"))
        const target = message.mentions.members.first()
        switch(args[0]){
            case "부여":
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("문제 발생!\n:x:당신은 관리자 권한이 없습니다")
                if(!message.mentions.members.first()) return message.reply(embed.setTitle("에러!").setDescription("멤버를 지정해주세요!").addField("경고 - 명령어 사용법","^경고 부여 <대상>\n**<대상>에는 대상을 멘션해주세요**").setColor("#fc4732"))
                if(!warnings[target.id]) warnings[target.id] = 0;
                warnings[target.id]++
                fs.writeFile("./warning.json",JSON.stringify(warnings),(err)=>{
                    if(err) console.log(err)
                })
                var reason = "없음";
                return message.reply(embed.setTitle("완료").setDescription(`성공적으로 ${target.user.username}님에게 경고 1회를 부여하였습니다`).addFields({name:"경고 사유",value:reason},
                {name:`${target.user.username}님의 경고 횟수`,value:`${warnings[target.id]}회`}))
            case "회수":
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("문제 발생!\n:x:당신은 관리자 권한이 없습니다!")
                if(!message.mentions.members.first()) return message.reply(embed.setTitle("에러!").setDescription("멤버를 지정해주세요!").addField("경고 - 명령어 사용법","^경고 회수 <대상>\n**<대상>에는 대상을 멘션해주세요**").setColor("#fc4732"))
                if(!warnings[target.id] || warnings[target.id] == 0) return message.reply(embed.setTitle("오류").setDescription("해당 사용자는 회수할 경고가 없습니다").setColor("#fc4732"))
                fs.writeFile("./warning.json",JSON.stringify(warnings),(err)=>{
                    if(err) return console.log(err) //https://youtu.be/6YZlLCpN8fc?t=744
                warnings[target.id]--
                return message.reply(embed.setTitle("완료").setColor("#00D166").addField(`${target.user.username}에게서 경고를 회수했습니다`,`${target.user.username}의 경고 횟수: ${warnings[target.id]}회`))
                }) 
            case "확인":
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("문제 발생!\n:x:당신은 관리자 권한이 없습니다")
                if(!message.mentions.members.first()) return message.reply(embed.setTitle("에러!").setDescription("멤버를 지정해주세요!"))
                if(!warnings[target.id] || warnings[target.id] == 0) return message.reply(embed.setTitle(`${target.user.username}의 경고 횟수`).setDescription(`0회`).setColor("#0099e1"))
                return message.reply(embed.setTitle(`${target.user.username}의 경고 횟수`).setDescription(`${warnings[target.id]}회`).setColor("#0099e1"))
        }
    }
}