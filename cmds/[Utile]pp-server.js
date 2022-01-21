const Discord = require('discord.js')

module.exports.run = async (bot,message,guild,args) => {


    message.channel.send(`Voici la pp de = __**${message.guild.name}**__`)
    message.channel.send(message.guild.iconURL ({ format: 'png', dynamic: true, size: 1024 }))
};

module.exports.config = {
    name: "pp-server"
};




