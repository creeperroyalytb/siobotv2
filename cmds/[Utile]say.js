const Discord = require('discord.js')


module.exports.run = async(bot, message, args) => {

  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:Alerte2:754441317307777024> Vous n\'avez pas la permission __**\"GESTION DES MESSAGES\"**__, donc l\'action est imposible <a:Nop:836606008964415529> `)
  if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer le *say* le salon ! <a:Victime:754441345623654514>")
    message.delete()

    let str = args.join(" ");
    if(!str) return message.channel.send("Vous devez spécifier le message que je dois envoyer !").catch(console.error);

    message.channel.send(args.join(" "));
};

module.exports.config = {
    name: "say"
};