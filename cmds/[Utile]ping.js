const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
const time = require('ms')


module.exports.run = async (client, message, args) => {
  
  // For the uptime for the discord bot ! ! !
  
  const uptime = time(client.uptime)
  
  // cool things yes.
  
  let inline = true
  
  // Sends a Messages
  
  const pingMessage = await message.channel.send("Voici ma latence et ma latence API et ma derniere mise a jour ! ");
  
  // Code Below
  // Also Change your setThumbnail and SetFooter
  
  
  const Embede = new Discord.MessageEmbed()
  .addField("Ma latence est :", `${pingMessage.createdTimestamp - message.createdTimestamp}ms`, inline)
  .setColor("#11bed3")
  .addField("Ma latence API est : ", `${Math.round(client.ws.ping)}ms`, inline)
  .addField('J\'ai été mis a jour depuis : ', uptime)
  
 
  Embede.setFooter('Ping Command')
  Embede.setTimestamp()
  message.channel.send(Embede)
    }

    module.exports.config = {
      name: "ping",
      description: "Permet de voir le ping de l'api / du bot / la dernière mise a jour !",
      usage: "ping"
  
    };