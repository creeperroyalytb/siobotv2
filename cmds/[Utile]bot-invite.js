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
        .setFooter('By Askarm#9232 and by X3F200C#2871', 'https://media.discordapp.net/attachments/928454061446017077/937432389892845618/standard.gif')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'bot-add' 
    }
