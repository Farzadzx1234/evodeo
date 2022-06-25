const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("Music Help panel", { botname: message.client.user.username }))
      .setDescription(" **Oxygen Music**
─────────────────────────
> \<:Oxygen24:989619598502543462>
`Pause the currently playing music`

> \<:Oxygen16:989600379094319214>
`Mute and Unmute the music`

> \<:Oxygen25:989622067945173094>
`Change volume of currently playing music`

> \<:Oxygen23:989619562955825152>
`Toggle music loop`

> \<:Oxygen12:989600371926245488>
`Stop the music` ")
    .setImage('https://cdn.discordapp.com/attachments/985145928501567538/989924167044440064/music.png') 
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
