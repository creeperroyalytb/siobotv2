const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports.run = async(bot,message,args) => {
  message.delete()
  if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Sondage")){
    return message.channel.send('*Vous devez disposer des autorisations de gestion des messages pour lancer des Sondage.\nOu alors demandez le rôle `Sondage`!*');
}
let lien = args[0];
    if(!lien) return message.channel.send("*Veuillez fournir une question !*");
  const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setTitle(args.join(" "))
  //.setThumbnail
  .addField("=", `
 **Oui =** <a:Valide_Or22:836611453851140097>  
 **Non =** <a:Nop:836606008964415529>
  `)
  .setTimestamp()

  const sondage = await message.channel.send(embed);
  await sondage.react("<a:Valide_Or22:836611453851140097>  ");
  await sondage.react("<a:Nop:836606008964415529>");
}

module.exports.config = {
  name: "sondage",

}
