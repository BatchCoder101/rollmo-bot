const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

 exports.run = (client, message, args) => {
                    
                            if (`${client.ping}` <= 50) { 
                            let  goodping = new Discord.RichEmbed()
                                .setColor("#00FF00")
                                .addField(`Ping: ${client.ping}`, `Woo! I'm feeling good! :slight_smile:`)
                                    message.channel.send(goodping);
                            }
                            if (`${client.ping}` <= 100 ) {
                                let decentping = new Discord.RichEmbed()
                                .setColor("#e6e600") 
                                .addField(`Ping: ${client.ping}`, `It's not that bad, right? :confused:`)
                                message.channel.send(decentping);
                            } else {
                                let  badping = new Discord.RichEmbed()
                                .setColor("#8b0000")
                                .addField(`Ping: ${client.ping}`, `Wow, this is higher than all my grades combined :slight_frown:`)
                                    message.channel.send(badping);
                            }
                        } 
        
             
     
     
     
module.exports.help = {
    name: "ping"
}
