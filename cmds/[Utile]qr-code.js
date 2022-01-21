const qrcode = require("qrcode");
const tempy = require("tempy");
 
module.exports.run = (client, message, args) => {
    let lien = args[0];
    if(!lien) return message.channel.send("** Veuillez fournir un Lien !**");
        const qrOutput = tempy.file({ extension: "png" });
        message.channel.startTyping();
        if (args.length > 0) {
            qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
                if (error) throw new Error(error);
                message.channel.stopTyping();
                message.channel.send(`**Voici votre QR Code sous le lien de :** \`${args}*\``)
                message.channel.send({
                    files: [{
                        attachment: qrOutput,
                        name: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.png`
                    }]
                });
            });
        }
    };
    module.exports.config = {
        name: "qr-code",
        description: "Crée un qr-code pour un lien",
        usage: "qr-code <lien>",
    }