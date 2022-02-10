const { Console } = require('console');
const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "",
    execute(message, args) {
        message.member.roles.add('941195353590476841');
    }
}