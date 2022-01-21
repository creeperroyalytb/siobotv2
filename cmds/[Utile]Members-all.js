
const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Le bot surveille __**${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} membres !**__ <a:zieut:843962779589148702>`)
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'm-all' 
    }
