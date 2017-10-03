const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

 exports.run = (client, message, args) => {
    let fbmessage = args[0];        
         let x = new Discord.RichEmbed()
        .setColor("#0e0d0d")    
        .addField(`${message.author.username}`, `${fbmessage}`);
message.guild.channels.find("name", "feedback").send(x);
     message.delete();
     let y = new Discord.RichEmbed()
        .setColor("#6ceb3b")    
        .addField(`Sucess!`, `Your feedback has been sent to <@325012890656702465>`);
     message.channel.send(y);
     
                        } 
        
             
     
     
     
module.exports.help = {
    name: "suggest"
}
