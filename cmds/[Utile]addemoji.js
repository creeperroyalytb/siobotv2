const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports.run = async(bot, message, args) => {

        if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send(" Vous n\'avez pas la permission **MANAGE_EMOJIS** donc l\'action est imposible ")
        }

        const emoji = args[0];
        if (!emoji) return message.channel.send(`**Veuillez me donné un edmoji !**`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
              customemoji.animated ? "gif" : "png"
            }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis.create(
                `${Link}`,
                `${name || `${customemoji.name}`}`
            ).catch(error => {
                console.log(error)
            })
            message.channel.send(`**L'emoji à bien été ajouté !** | **Nom :** \`${name || `${customemoji.name}`}\` | **Aperçu :** [Click ici](${Link})`)
                    
        
            return message.channel.send(Added).catch(e => {
                console.log(e)
            })
        } else {
            let CheckEmoji = parse(emoji, {
                assetType: "png"
            });
            if (!CheckEmoji[0])
                return message.reply(`Veuillez me donner un emoji valide !`);
            message.channel.send(
                `Vous pouvez utiliser des emoji normaux sans ajouter de serveur !`
            );
        }
    }

module.exports.config = {
  name: 'addemoji'
}