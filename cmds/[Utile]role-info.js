const Discord = require('discord.js'),
    moment = require('moment')
 
    module.exports.run = (bot, message, args) => {
        const role = message.mentions.roles.first() || message.guild.members.cache.get(args[0])
        if (!role) return message.channel.send('**Merci de founir un rôle valide !** <a:Alerte1:754441316905123994>')
        message.channel.send(new Discord.MessageEmbed()
            .addField('Rôle', role, true)
            .addField('Membres le possédant', role.members.size, true)
            .addField('Couleur', role.hexColor, true)
            .addField('Date de création', moment(role.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Affiché séparément', role.hoist ? 'Oui' : 'Non', true)
            .addField('Mentionnable', role.mentionable ? 'Oui' : 'Non', true)
            .setFooter(`ID : ${role.id}`)
            .setColor(role.hexColor))
    }

    module.exports.config = {
        name: "role-info"
  };
