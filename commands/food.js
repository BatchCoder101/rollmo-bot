const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

                   




       
 exports.run = (client, message, args) => {
     let nocommand = args[0];
     let help = args[0];
     let feedback = args[0];
     let changelog = args[0];
     let verison = args[1];
     let count = args[0];
     let shutdown = args[0];
   let random = args[0];

    if (nocommand === undefined) { 
message.delete();
message.channel.send(`${message.author} just got free food!`);
    }
 }
                               
  
             
     
     
     
module.exports.help = {
    name: "food"
}
