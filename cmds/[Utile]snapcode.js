const Discord = require('discord.js');
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {


        const pseudo = args[0] 
        if(!pseudo) return message.channel.send(`**Merci de founir un pseudo !** <a:Alerte1:754441316905123994>`)

        const snapcode = `https://feelinsonice.appspot.com/web/deeplink/snapcode?username=${pseudo}&size=320&type=PNG`


        const embed = new Discord.MessageEmbed()
            .setTitle("SNAPCODE")
            .setDescription("Voici votre recherche du snapcode: `" + pseudo + "`")
            .setImage(snapcode)

        .setColor('RANDOM');

        message.channel.send(embed)

};
module.exports.config = {
  name: "snapcode",
  description: "Envoi une recherche snapcode",
  usage: "snapcode <pseudo>",
}