const {

EmbedBuilder

}=require(

"discord.js"

);

module.exports={

name:"ad",

execute(message){

const embed=

new EmbedBuilder()

.setColor(

"#f3d6df"

)

.setTitle(

"୨୧ Partner With Us ୨୧"

)

.setDescription(

`♡ active community

♡ partnerships open

♡ giveaways

♡ friendly members

discord.gg/YOURINVITE`
)

.setFooter({

text:

"thank you for supporting us ♡"

})

.setTimestamp();

message.channel.send({

embeds:[embed]

});

}

};
