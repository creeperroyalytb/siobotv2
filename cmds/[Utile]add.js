const Discord = require("discord.js");



module.exports.run = async(bot,message,args) => {

  let inviteembed = new Discord.MessageEmbed()





        const embed = new Discord.MessageEmbed()

        .setColor('RANDOM')

        .setTitle("__**Clique ici, pour ajouter le bot, à votre serveur Discord !**__")

        .setURL(`https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958847`)

        .setDescription("__**Merci à toi !**__ ")

        message.channel.send(embed)  

  }





  module.exports.config = {

    name: 'add' 

    }

