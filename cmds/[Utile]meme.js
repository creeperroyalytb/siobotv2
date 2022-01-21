const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports.run = async(bot,message,args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`Un mème de r /${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img)
      .setFooter('Ci ca n\'aparait pas ressaye')
    message.channel.send(Embed);
  }

  module.exports.config = {
    name: 'meme' 
  }