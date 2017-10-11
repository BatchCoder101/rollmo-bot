const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

 exports.run = (client, message, args) => {
                                                                                   let restarting = new Discord.RichEmbed()
                         .setColor("#e6e600")    
                         .addField(`Request To Restart`, `Restarting...`);
     
                                                                                        let restarted = new Discord.RichEmbed()
                         .setColor("#2ace2a")    
                         .addField(`Restart`, `I've been restarted!`);
message.channel.send(restarting).then(() => {
            client.destroy().then(() => {
                process.exit(restarted)
            })
        })
client.on("ready", () => {
    console.log('Bot is ready!');
    });
                        } 
        
             
     
     
     
module.exports.help = {
    name: "restart"
}
