// Dependencies
const { shorten } = require('tinyurl');

module.exports.run = async (bot, message, args) => {
	const mes = message.content.split(' ').slice(1).join(' ');
	try {
		shorten(mes, function(res) {
			message.channel.send(res);
		});
	} catch (err) {
		if (bot.config.debug) bot.logger.error(`${err.message} - command: shorturl.`);
		message.channel.send("Une erreur est survenue ressayez").then(m => m.delete({ timeout: 5000 })).then(m => m.delete({ timeout: 10000 }));
	}
};


module.exports.config = {
	name: 'shorturl'
};
