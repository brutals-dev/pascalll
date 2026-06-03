const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ad",
  execute(message) {

    const embed = new EmbedBuilder()
      .setColor("#f3d6df")
      .setTitle("✦ PASCAL CLOTHING ✦")
      .setDescription("Ad system working perfectly!")
      .setFooter({ text: "Pascal Clothing ♡" })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
