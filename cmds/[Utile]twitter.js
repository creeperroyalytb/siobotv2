
const Discord = require("discord.js")
const request = require("node-superfetch") //npm i node-superfetch
const {stripIndents} = require("common-tags") //npm i common-tags
const twitter = require("twitter-api.js") //npm i twitter-api.js
module.exports.run = async (client, message, args) => {
    let user = args[0]
    if(!user) return message.channel.send("**Merci de founir un pseudo !** <a:Alerte1:754441316905123994>")
    
    try {
      const body = await twitter.users(user)
      const tweet = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`@${body.screen_name.toLowerCase()}`, body.verified ? "https://emoji.gg/assets/emoji/6817_Discord_Verified.png" : null)
      .setDescription(stripIndents` ${body.description}
      \`•\` Followers: **${(body.followers_count).toLocaleString()}**
      \`•\` Following: **${(body.friends_count).toLocaleString()}**
      \`•\` Tweets: **${(body.statuses_count).toLocaleString()}**
      \`•\` Account Crée le: ${body.created_at}`)
      .setFooter(`Twitter ID: ${body.id}`, "https://abs.twimg.com/favicons/twitter.ico")
      .setThumbnail(body.profile_image_url_https.replace('_normal', ''))
      .setImage(body.profile_banner_url)
      message.channel.send(tweet)
    } catch (e) {
      if(e.status === 403) return message.channel.send("<:NOPE:818042896690708521> Cet utilisateur en mode privé ou compte supprimé")
      else if(e.status === 404) return message.channel.send("<:NOPE:818042896690708521> Pas trouvé ")
      else return message.channel.send(`<:NOPE:818042896690708521> Erreur inconnue:  \`${e.message}\``)
    }
  }

module.exports.config = {
  name: "twitter",
  description: "Permet de recherchez un profils sur twitter !",
  usage: "twitter <Profils>"

};