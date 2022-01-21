
const ms = require('ms')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  const member = message.author

    // Variables
    let reason = args.slice(1).join(" ")
    let time = args[0];

        // Input Checking
        const tempMuteFormatErr = new Discord.MessageEmbed()
          .setDescription('Error! Vous devez indiquer une durée pour votre rappel !.  \`[e!rappel [Durée] [Raison]\`')
          .setColor('RED')
        if (!time) return message.channel.send(tempMuteFormatErr)

        const noReasonInput = new Discord.MessageEmbed()
          .setDescription('Error! Veuillez indiquer votre raison de rappel ! \`[e!rappel [Durée] [Raison]\`')
          .setColor('RED')
        if (!reason) return message.channel.send(noReasonInput)

        // Executing
        const muteEmbedServer = new Discord.MessageEmbed()
      message.reply(`**Je vais vous __rappelez__ de : \`${reason}\`, dans : \`${time}\` !** <a:Valide_Or:756978408159707136>`)  
        setTimeout(async function () {
          
          member.send(`**Voici votre rappel: \`${reason}\` !** `)

        }, ms(time));
      }
      module.exports.config = {
        name: "rappel"
      
      };