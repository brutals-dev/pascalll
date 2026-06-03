const {
Client,
GatewayIntentBits,
Collection

}=require("discord.js");

const fs=require("fs");

const config=require("./config.json");

const client=new Client({

intents:[

GatewayIntentBits.Guilds,

GatewayIntentBits.GuildMessages,

GatewayIntentBits.MessageContent

]

});

client.commands=new Collection();

const commandFiles=

fs.readdirSync("./commands")

.filter(

file=>file.endsWith(".js")

);

for(const file of commandFiles){

const command=

require(`./commands/${file}`);

client.commands.set(

command.name,

command

);

}

client.on(

"messageCreate",

message=>{

if(message.author.bot)return;

if(

!message.content.startsWith(

config.prefix

)

)return;

const args=

message.content

.slice(

config.prefix.length

)

.trim()

.split(/ +/);

const cmd=

args.shift()

.toLowerCase();

const command=

client.commands.get(

cmd

);

if(!command)return;

command.execute(

message,args);

}

);

client.once(

"ready",

()=>{

console.log(

`${client.user.tag} online`

);

}

);

client.login(

process.env.TOKEN

);
