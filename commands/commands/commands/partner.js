const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "partner",
  execute(message) {

    const embed = new EmbedBuilder()
      .setColor("#f3d6df")
      .setDescription(`💞 Partner system active!

Step 1: Meet requirements
Step 2: Send .ad
Step 3: Send proof
Step 4: Wait for approval`)
      .setFooter({ text: "Partner System ♡" })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
