const { MessageEmbed } = require('discord.js') // npm i discord.js
const fetch = require('node-fetch') // npm i node-fetch

module.exports.run = async (client, message, args) => {

        const wiki = args.slice().join(' ')
        if(!wiki) return message.reply('**Merci de founir une recherche !** <a:Alerte1:754441316905123994>') // If No Topic Provided To Searched
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}` // From Here BOT Will Search For Searched Topic

        let response
        try {
            response = await fetch(url).then(res => res.json()) // Getting Result
        }      
        catch (e) {
            return message.reply('Une erreur s\'est produite, réessayez. ') // If Error Occur's
        }

        try {
            if(response.type === 'disambiguation') { // If Their Are Many Results With Same Searched Topic
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title) // Title Of Topic
                .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
                .setDescription([`
                ${response.extract}
                Liens pour le sujet que vous avez recherché [lien](${response.content_urls.desktop.page}).`]) 
                message.channel.send(embed)
            }
            else { // If Only One Result
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title) // Title Of Topic
                .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
                .setThumbnail(response.thumbnail.source)
                .setDescription(response.extract)
                message.channel.send(embed)
            }
        }
        catch {
            return message.reply('<:NOPE:818042896690708521> Fournissez une requête valide pour la recherche. ') // If Searched Topic Is Not Available
        }
    }

module.exports.config = {
  name: "wiki",
  description: "Permet de recherchez sur wikipedia",
  usage: "wiki <recherche>"

};