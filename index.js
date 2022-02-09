const Discord = require('discord.js');
const config =  require('./config.json')
const prefix = "^";

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '구구') {
    msg.channel.send('구구!');
  }
});
// client.on('message', msg =>{
//     if (msg.content === '^ping')
//     {
//         msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
//     }
// });
client.on('message', msg =>{
    if (msg.content === '비둘기봇')
    {
        msg.channel.send('저 부르셨어요? 구구!')
    }
});
client.on('message', msg =>{
    if (msg.content === '안녕!')
    {
        msg.channel.send(`${msg.author.username}님 안녕하세요! 구구!`);
    }
});
client.on('message', msg =>{
    if (msg.content === '안녕')
    {
        msg.channel.send(`${msg.author.username}님 안녕하세요! 구구!`);
    }
});
client.on('message', msg =>{
    if (msg.content === 'ㅎㅇ')
    {
        msg.channel.send(`${msg.author.username}님 안녕하세요! 구구!`);
    }
});
client.on('message', msg =>{
    if (msg.content === 'gd')
    {
        msg.channel.send(`${msg.author.username}님 안녕하세요! 구구!`);
    }
});
// client.on('message', msg =>{
//     if (msg.content === '^myavatar')
//     {
//         msg.channel.send(`${msg.author.avatar}`);
//     }
// });
client.on('message', msg =>{
    if (msg.content === '^clear') {
        if(isNaN(args[0])) return msg.reply("Please enter available value!")
    const MessageCount = parseInt(args[0])
    msg.channel.bulkDelete(MessageCount + 1).then((count) => {
        msg.reply(`Deleted ${count.size} Messages Successfully!`).then((msg) => {
            setTimeout(() => {msg.delete()}, 10000)
        })
    }).catch((error) => {
        msg.reply(`Error Occured\nReason is Here\n${error}`)
    })
} 
});
client.on('message', (message) =>{
    if (message.content.startsWith("^ban")) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
          // Easy way to get member object though mentions
          let member = message.mentions.members.first();
          // ban
          member.ban().then((member) => {
              // Success Message
              message.channel.send(`Banned ${member.displayName}`);
            }).catch(() => {
              // Fail Message
              message.channel.send("Access Denied");
            });
        } else {
          message.reply("You do not have permissions to ban someone.");
        }
      }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.on('message', msg =>{
    if (msg.content === '^')
    {
        msg.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
});
client.login(config.token);