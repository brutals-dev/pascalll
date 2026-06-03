const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ad",
  execute(message) {

    const embed = new EmbedBuilder()
      .setColor("#f3d6df")
      .setTitle("✦ PASCAL CLOTHING ✦")
      .setDescription(`> The New Generation Of Clothing

🛍️ Premium Roblox Clothing
✦ Original Designs
✦ Frequent Drops
✦ Clean & Unique Fits
✦ Styles For Every Aesthetic

🎁 Weekly Giveaways
✦ 300 Robux Every Week

🌟 Why Join?
✦ Active Community
✦ Sneak Peeks & Events
✦ Exclusive Content

> Upgrade Your Avatar
> Discover Your Next Favorite Fit

✦ Pascal Clothing
「 Style Starts Here 」

discord.gg/pascal`)
      .setFooter({ text: "thank you for supporting Pascal ♡" })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
