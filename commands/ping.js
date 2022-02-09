const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "피잉",
    execute(msg){
        message.channel.send(`🏓Pong! ${client.ws.ping}ms`);
    }
}