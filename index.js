const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

/* =========================
   LOAD COMMANDS
========================= */

console.log("🚀 Starting bot...");

const commandPath = path.join(__dirname, "commands");

const commandFiles = fs.readdirSync(commandPath).filter(f => f.endsWith(".js"));

console.log("📦 Commands found:", commandFiles);

for (const file of commandFiles) {
  const filePath = path.join(commandPath, file);

  const command = require(filePath);

  if (!command.name || !command.execute) {
    console.log("❌ Invalid command file:", file);
    continue;
  }

  client.commands.set(command.name, command);

  console.log("✅ Loaded command:", command.name);
}

/* =========================
   MESSAGE HANDLER
========================= */

client.on("messageCreate", (message) => {
  console.log("💬 Message:", message.content);

  if (message.author.bot) return;

  const prefix = ".";

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  console.log("⚙️ Command used:", cmd);

  const command = client.commands.get(cmd);

  if (!command) {
    console.log("❌ Command not found:", cmd);
    return;
  }

  try {
    command.execute(message, args);
  } catch (err) {
    console.error("❌ Error running command:", err);
  }
});

/* =========================
   READY EVENT
========================= */

client.once("ready", () => {
  console.log(`🤖 ONLINE: ${client.user.tag}`);
});

client.login(process.env.TOKEN);
