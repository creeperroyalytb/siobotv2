const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let user;

	if(!args.length) {
		user = message.author;
	} else {
		user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
	};
	if(!user || !message.guild.member(user)) return message.channel.send('⚠️ Cet utilisateur n\'existe pas !');
    
    const member = message.guild.member(user);

    message.channel.send(`Voici la pp de = __**${member.user.tag}**__`)
    message.channel.send(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
};

module.exports.config = {
    name: "pp"
};




