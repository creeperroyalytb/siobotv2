module.exports.run = (client, message, args) => {
  message.channel.send(`🎙️ | Membre en vocal: **${message.guild.members.cache.filter(m => m.voice.channel).size}** (**${message.guild.memberCount} membres**)`)
};


module.exports.config = {
  name: "vc",
  description: "Compteur des membres en vocal en direct.",
  usage: "vc"
};