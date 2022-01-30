const Discord = require("discord.js"); //Tos > all !
const bot = new Discord.Client(
  {disableMentions: 'everyone',
  "intents":[]
 }); //enlève !say @everyone / @here/

const config = require('./db/config.json') //token
const fs = require('fs'); //pas touche or gay !

bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) => {
  if (err) console.log(err)
  let jsfile = files.filter(f => f.split('.').pop() === 'js') //pas touche or gay !
  if (jsfile.length <= 0) {
  }

  jsfile.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.config.name, props) 
  })
});

bot.on("ready", async () => {
    
    const channel = bot.channels.cache.get("ID") //Bot lancé !
   const embed1 = new Discord.MessageEmbed()
   .setDescription('**Je suis bien lancée !**')
   .setColor('RED')
   //channel.send(embed1)
   

  console.log( //Quand le bot est on !
    `${"-".repeat(40)}\n` +
    "|  Logs.  |\n" +
    `${"-".repeat(40)}\n` +
    "Bot Infos : \n" +
    `Nom du bot    : ${bot.user.tag}!\n` +
    `ID du bot     : ${bot.user.id}\n` +
    `Invitation : https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958847 \n` +
    `${"-".repeat(40)}\n`
  );

  let statuses = [
    "https://discord.gg/Jtq74rA7PM", //Tu peux en add d'autre !
    `${bot.guilds.cache.size} serveurs !`,
    `${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} membres !`, 
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "STREAMING",
      url: 'https://www.twitch.tv/squirkaskarm' //abo ou t pas bo ! 🥰
    })
  }, 5000)
  
})

bot.on('message', async message => { //Quand on ping le bot + le prefix
  const prefix = "!";

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (message.content === `<@!${bot.user.id}>`) {
      const ee = new Discord.MessageEmbed()
        .setTitle("On ma ping ?")
        .setColor("RANDOM")
        .setDescription("")
        .setTimestamp()
        .setFooter('')
      message.channel.send(ee)
    }

    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

  const cmd = bot.commands.get(commande);
  const embederr = new Discord.MessageEmbed()
  .setDescription(`La commande : \`${commande}\` n'existe pas, \n pour voir la liste des commmandes faite : \`!help\`  ! `)
  .setColor("RANDOM") //Commande qui existe pas !
  .setTimestamp()
  .setFooter('')
    if(!cmd) return message.channel.send(embederr)

    cmd.run(bot, message, args);
})


bot.on('guildCreate', async guild => {
  const channel = bot.channels.cache.get("ID") //Quand on add le bot
  let addembed = new Discord.MessageEmbed()
    .setTitle(`BOT vient d'être ajouté sur le serveur : ${guild.name}`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `${guild.owner}`)
    .addField(`📇 Nom du serveur :`, `${guild.name}`)
    .addField(` Id du serveur:`, `${guild.id}`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor("11d646")
    .setTimestamp()
    .setFooter(`Merci grâce à toi nous sommes à ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
  channel.send(addembed);

})

bot.on('guildDelete', guild => {
  const channel = bot.channels.cache.get("ID") //Quand on kick le bot
  let removeembed = new Discord.MessageEmbed()
    .setTitle(`BOT vient d\'être retiré du serveur serveur ${guild.name}`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `${guild.owner}`)
    .addField(`📇 Nom du serveur :`, `${guild.name}`)
    .addField(` Id du serveur:`, `${guild.id}`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor(`fc3d12`)
    .setFooter(`Désormais : ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
  channel.send(removeembed)

})

bot.on('channelCreate', channel => {
  if (!channel.guild) return
  const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted') //On peut changé le name
  if (!muteRole) return
  channel.createOverwrite(muteRole, {
    SEND_MESSAGES: false,
    CONNECT: false,
    ADD_REACTIONS: false
  })
})

bot.on('guildCreate', async guild => {
  let embed = new Discord.MessageEmbed() // Dm le owner du serveur
    .setColor("RED")
    .setTitle("")
    .setDescription("")
    .setImage('')
    .setFooter('');
  guild.owner.send(embed);
});

bot.on('message', async message => {

  if (message.author.id != "437126419726991365") return; //Ton ID
  if (message.content === `Wsh <@!${bot.user.id}> comment va-tu ?`) { //Message pour le bot rep
    message.channel.send(`Très bien et vous maître ?`)}; //message de réponse 

  });

  bot.on("message", async message => {
    if (message.content == "Askarm") {
      message.react('<:pepe_evil:929400492214349917>'); //Edmoji "" no mention or ban!
  
    }
  })

  bot.on('guildMemberAdd', async member => {
    const black_list = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'));
 const reason = `${black_list[member.id]} [Blacklist Auto de Elexyr22#0022 !]`;

 const embedmp = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setAuthor("BlackList-Automatique !")
   .setTitle("MESSAGE 1")
   .setDescription(`Vous êtes **banni** du serveur  **__${member.guild.name}__** parce-que vous êtes dans la __**"Blacklist"**__ !"`)
   .setTimestamp()
 if (!black_list[member.id]) return;

 let blackMember = black_list[member.id].blacklist;


 if (blackMember === 1) {
   await member.send(embedmp).catch(console.error);

   member.ban({
     reason: reason
   })
 };
})

const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;  
  
  
bot.login(config.token) //Token du bot
