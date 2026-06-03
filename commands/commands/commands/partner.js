module.exports = {
  name: "partner",

  execute(message) {
    message.channel.send({
      content:
        "💞 **Pascal Partnership System**\n\n" +
        "① Meet requirements\n" +
        "② Use `.ad` in your server\n" +
        "③ Send uncropped proof\n" +
        "④ Wait for approval\n\n" +
        "✨ Good luck!"
    });
  }
};
