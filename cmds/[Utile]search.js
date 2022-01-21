const Discord = require('discord.js');
var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports.run = async (bot, message, args) => {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Veuillez founir le nom du image ! <a:Alerte1:754441316905123994>');
        message.channel.send('Merci de patienter ! <a:Attente1:754441322059923538>')

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Recherche de l\'image : ' + (image_query))
        .setColor('#440096')
        .setImage(image_results[0].url)
        .setFooter("Demandé par " + message.author.tag))

    }

    module.exports.config = {
      name: "search-i"
    }