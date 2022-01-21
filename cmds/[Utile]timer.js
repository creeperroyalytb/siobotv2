const Discord = module.require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');


module.exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:Alerte2:754441317307777024> Vous n\'avez pas la permission __**"\MANAGE_MESSAGES\"**__ donc l\'action est imposible <a:Nop1:768183643020853298> ')
  if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**\"ADMINISTRATEUR\"**__, je ne peux donc pas lancer le *timer !* <a:Victime:754441345623654514>")
const Timer = args[0]
    if(isNaN(Timer)) return message.reply("Je suis en **timer** en **millisecondes !**")
    if (ms(Timer) > 2147483647) return message.reply("Je ne vais pas m'améliorer comme ça")
    if(ms(Timer) < 1) return message.reply("À quoi ça sert?")
  
    if(!args[0]){
      return message.channel.send(":x: " + "|Veuillez saisir une période suivie de \"s ou m ou h \"");
    }
  
    if(args[0] <= 0){
      return message.channel.send(":x: " + "|Veuillez saisir une période suivie de \"s ou m ou h \"");
    }
  
    message.channel.send(":white_check_mark: " + "| Minuterie démarrée pour: " + `${ms(ms(Timer), {long: true})}`)
  
    setTimeout(function(){
      message.channel.send(message.author.toString() + `La minuterie s'est terminée!, Elle a duré: ${ms(ms(Timer), {long: true})}`)
    }, ms(Timer));
  }

module.exports.config = {
  name: "timer",
  description: "Fait un minuteur en MS",
  usage: "/timer + temps en ms",
  accessableby: "Members",
  aliases: []
}
