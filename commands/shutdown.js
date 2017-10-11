const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

 exports.run = (client, message, args) => {
     let noperms = new Discord.RichEmbed()
                    .setColor("#8b0000")    
                    .addField('Unable To Shutdown', `You don't have permission!`);

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noperms);
                                         let update = new Discord.RichEmbed()
                    .setColor("#20B2AA")    
                    .addField(`Shutdown`, `I've been shutdown due to an update or repair! Please stand by!`)
     
message.guild.channels.find("name", "general").send(update).then(() => {
            client.destroy().then(() => {
            })
        })
 }
             
     
     
     
module.exports.help = {
    name: "shutdown"
}
