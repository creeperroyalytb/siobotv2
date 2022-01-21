const { MessageEmbed } = require('discord.js');
const request = require("node-superfetch"); // npm i node-superfetch
const key = ('AIzaSyB5Yhyqg2B1EjYn9jkV7l96xDYCNCeVPz0')// you need a google api key

module.exports.run = async (bot, message, args) => {

    try {
        const query = args.join(` `);
        if (!query) return message.channel.send("Veuillez founir un message ! <a:Alerte1:754441316905123994>");
        const { body } = await request
          .get('https://www.googleapis.com/youtube/v3/search')
          .query({
            part: 'snippet',
            type: 'video',
            maxResults: 1,
            q: query,
            key: (key)
          });
        if (!body.items.length) return message.channel.send('Aucun résultat trouvé pour  ' + query + ".");
        const embed = new MessageEmbed()
          .setColor("#ff0000")
          .setTimestamp(new Date())
          .setTitle(`${body.items[0].snippet.title} - ${body.items[0].snippet.channelTitle}`)
          .setDescription(body.items[0].snippet.description)
          .setAuthor('YouTube', 'https://seeklogo.net/wp-content/uploads/2020/03/YouTube-icon-SVG-512x512.png')
          .setURL(`https://www.youtube.com/watch?v=${body.items[0].id.videoId}`)
          .setThumbnail(body.items[0].snippet.thumbnails.default.url)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed).catch(console.error);
      } catch (err) {
        if (err.status === 404) return message.reply('Je ne trouve aucun résultat pour cette vidéo :( ');
        console.log(err);
        return message.channel.send(`Désolé: (j'ai eu une erreur en essayant de vous obtenir un résultat. réessayez plus tard! `);
    }

  }
  module.exports.config = {
    name: "search-y",
    description: "Recherche une vidéo Youtube",
    usage: "youtube <vidéo>"
  }
