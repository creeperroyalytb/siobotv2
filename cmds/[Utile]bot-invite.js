const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()


  const user = message.mentions.users.first();
    
  if (!user) return message.reply(`*Veuillez mentionnez un BOT !* <a:Eyes22:837827323079819365>`);
  if (!user.bot) return message.channel.send(`**Cette personne n'est pas un Bot, dommage tu peux pas l'invité sur ton serv !** <a:Cache:843968320310345799>`); 

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Nom du bot : ${user.tag}`)
        .setDescription(`Invitation __avec__ Perm : https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958847 \n\n Invitation __sans__ Perm : https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0\n\n`)
        .setTimestamp()
        .setFooter('By Elexyr22#0022', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'bot-add' 
    }