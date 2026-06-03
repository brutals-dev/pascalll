const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// command collection
client.commands = new Collection();

// load commands safely
const commandPath = __dirname + "/commands";
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`${commandPath}/${file}`);
  if (command.name && command.execute) {
    client.commands.set(command.name, command);
    console.log(`Loaded command: ${command.name}`);
  }
}

// message handler
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/);

  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);
  if (!command) return;

  try {
    command.execute(message, args);
  } catch (err) {
    console.error("Command error:", err);
    message.reply("❌ Error running command.");
  }
});

// ready event
client.once("ready", () => {
  console.log(`${client.user.tag} is ONLINE`);
});

client.login(process.env.TOKEN);
