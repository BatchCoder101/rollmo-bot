const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

                    




       
 exports.run = (client, message, args) => {
     

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):


     
const rolled = Math.floor((Math.random() * 6666) + 1);
const premiumrolled = Math.floor(Math.random() * 3333) + 6667;
     
     var withBreaks = "- <@325012890656702465> \n- <@278277143522181121> \n- <@125319130579468288>"
     
            let  x = new Discord.RichEmbed()
                                .setColor("#b76de0")
                                .addField(`Roll`, `You've rolled $${rolled}!`)
                                .addField(`Who can add your money?`, withBreaks); //withBreaks
     
                 let  x2 = new Discord.RichEmbed()
                                .setColor("#9923da")
                                .addField(`Premium Roll`, `You've rolled $${premiumrolled}!`)
                                .addField(`Who can add your money?`, withBreaks); 
     
let toRoll = message.member     
     let role = message.guild.roles.find("name", "Rollmo");     
     let prole = message.guild.roles.find("name", "Rollmo Premium");
     
         if(message.member.roles.find("name", "Rollmo")) { 
            message.channel.send(x);
             toRoll.removeRole(role).catch(console.error);
                        } else {
            if(message.member.roles.find("name", "Rollmo Premium") || message.member.hasPermission("ADMINISTRATOR")) { 
            message.channel.send(x2);
            toRoll.removeRole(prole).catch(console.error);
        }
    }     
 }

  
             
     
     
     
module.exports.help = {
    name: "rollmo"
}