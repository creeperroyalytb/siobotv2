const { MessageEmbed } = require('discord.js');
module.exports.run = async (client, message, args) => {

    let member = message.guild.members.cache.random();
    const msg = message.channel.send(`Recherche d'un avatar aléatoire ... `);
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Avatar de :__${member.user.tag} !__** <a:Valide_Or:756978408159707136>`)
    .setImage(member.user.displayAvatarURL({dynamic: true, size:4096}))
    .setTimestamp()
    .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
    message.channel.send(embed)
    }

    module.exports.config = {
        name: "pp-random"
      
      };