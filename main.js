const Discord = require('discord.js');
const client  = new Discord.Client();
const {prefix, token} = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}

client.on('ready', () => {
    let number = 0
    setInterval(() => {
        const list = ["문의는 나인주안#9900으로\nGive Question to 나인주안#9900", "^도움말 or ^명령어\n^help or ^commands"]
        if(number == list.length) number = 0
        client.user.setActivity(list[number],{
            type:"PLAYING"
        })
        number++
    }, 10000)
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message',(msg)=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    const command = client.commands.get(commandName)
    try{
        command.execute(msg,args)
    }
    catch(error){
        console.log(error)
    }
})
client.on('message', msg =>{
    if (msg.content === '^ping')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^핑')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.login(token);
//:otter:
//:dove:
//:x:
//:o:
//:white_check_mark:
//:nine:
//:soccer:
