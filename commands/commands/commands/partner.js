const {

EmbedBuilder

}=require(

"discord.js"

);

const config=

require(

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

`💞 **tysm for partnering with us !!**

① meet our requirements

→ <#${config.requirementsChannel}>

② type \`.ad\`

③ send uncropped proof

④ wait for staff review ✨`
)

.setFooter({

text:

"partner system ♡"

})

.setTimestamp();

message.channel.send({

embeds:[embed]

});

}

};
