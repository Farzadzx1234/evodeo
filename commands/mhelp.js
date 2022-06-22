const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "mhelp",
  aliases: ["mh"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("Syma Help Music Menu", { botname: message.client.user.username }))
      .setDescription(i18n.__("\n **Syma Bot\nDeveloped By AnimeClub Team\n\nBot Prefix ➜ `+`\n\n🇱🇷〢 Just English\n🇮🇷〢Persian (Coming Soon)\n\nFor Bot Invite ➜ `-invite`\nNeed help? Click `🗣️ Server Support` Button\n\nBest ~ Farzad**\n\n📌 **Help Panel** 📌\n"))
      .setColor("#ffffff");
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();
    helpEmbed.setFooter(`Message ID: ${message.id}`)

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
