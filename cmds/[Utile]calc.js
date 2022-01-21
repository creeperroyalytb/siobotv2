const math = require('mathjs');
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {


    if(!args[0]) return message.channel.send('Veuillez founir un calcule ! <a:Alerte1:754441316905123994>');

    let resp;

    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send('Veuillez fournir une calcule __**Valide **__')
    }

    const embed = new MessageEmbed()
         .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Réponsse', `\`\`\`css\n${resp}\`\`\``)
 .setColor('RANDOM')
    message.channel.send(embed);




};


module.exports.config = {
    name: "calc",
    description: "Calcule un calcul simple",
    usage: "calc <calcul>"
  };