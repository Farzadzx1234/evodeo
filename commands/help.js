const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "mhelp",
  aliases: ["mh"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("Oxygen Music", { botname: message.client.user.username }))
      .setDescription("\n**Oxygen Music**\n─────────────────────────\n> <:Oxygen24:989619598502543462>\n`Pause the currently playing music`\n\n > <:Oxygen16:989600379094319214>\n`Mute and Unmute the music`\n\n> <:Oxygen25:989622067945173094>\n`Change volume of currently playing music`\n\n> <:Oxygen23:989619562955825152>\n`Toggle music loop`\n\n > <:Oxygen12:989600371926245488> \n `Stop the music` ")
      .setImage('https://cdn.discordapp.com/attachments/985145928501567538/989924167044440064/music.png')
      .setColor("#ffffff");

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
