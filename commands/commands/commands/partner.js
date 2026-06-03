const {

EmbedBuilder

}=require(

"discord.js"

);

const config=require(

"../config.json"

);

module.exports={

name:"partner",

execute(message){

const embed=

new EmbedBuilder()

.setColor(

"#f3d6df"

)

.setDescription(

`💞 **tysm for partnering with Pascal !!**

**① Meet our requirements**

→ <#${config.requirementsChannel}>

**② Type \`.ad\`**

Send our advertisement inside your server

**③ Send proof**

Take an UNCROPPED screenshot

**④ Wait patiently**

Staff will review your partnership ✨`

)

.setFooter({

text:

"Pascal Partnership System ♡"

})

.setTimestamp();

message.channel.send({

embeds:[embed]

});

}

};
