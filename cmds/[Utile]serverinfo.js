const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let serverembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL ({ format: 'png', dynamic: true, size: 1024 }))
        .setAuthor(message.guild.name, (message.guild.iconURL ({ format: 'png', dynamic: true, size: 32 })))
        .setDescription(`**Owner :** ${message.guild.owner}`)
        .addField("Serveur créé le :",  message.guild.createdAt.toLocaleString(), true)
        .setTimestamp()
        .setFooter(`ID : ${message.guild.id}`)



 
    message.channel.send(serverembed);

 
}
 
module.exports.config = {
    name: "si"
}