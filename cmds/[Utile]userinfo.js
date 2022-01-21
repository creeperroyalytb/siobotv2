const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot,message,args) => {

    let user;

	if(!args.length) {
		user = message.author;
	} else {
		user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
	};
	if(!user || !message.guild.member(user)) return message.channel.send('⚠️ Cet utilisateur n\'existe pas !');
    
    const member = message.guild.member(user);

    let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${member.user.tag}`,member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 256 }))
        .addFields(
            { name: " Compte créé :", value: moment(member.user.createdAt).locale('fr').format('llll'), inline: true },
            { name: " Rejoint le serveur :", value: moment(member.joinedAt).locale('fr').format('llll'), inline: true },
        )
        .setTimestamp()
        .setFooter(`ID : ${member.user.id}`)
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'user-info' 
    }
