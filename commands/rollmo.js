const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

                   




       
 exports.run = (client, message, args) => {
     let all = args[0]; 
     let nocommand = args[0];
     let help = args[0];
     let feedback = args[0];
     let changelog = args[0];
     let verison = args[1];
     let count = args[0];
     let shutdown = args[0];
   let random = args[0];

    if (nocommand === undefined) { 
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
     
         if (message.member.roles.find("name", "Rollmo")) { 
            message.channel.send(x);
             toRoll.removeRole(role).catch(console.error);
                        } else {
            if(message.member.roles.find("name", "Rollmo Premium") || message.member.hasPermission("ADMINISTRATOR")) { 
            message.channel.send(x2);
            toRoll.removeRole(prole).catch(console.error);
        } 
} 
    }  else
     if (all === 'all') {
                                                  let noperms = new Discord.RichEmbed()
                    .setColor("#8b0000")    
                    .addField('Unable To Rollmo All', `You don't have permission!`);

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noperms);
     
const rollall = Math.floor(Math.random() * 4000) + 1001;
     
     var withBreaks = "- <@325012890656702465> \n- <@278277143522181121> \n- <@125319130579468288>"
     
            let  x = new Discord.RichEmbed()
                                .setColor("#ff69b4")
                                .addField(`Rollmo All`, `${message.author} rolled $${rollall} for everyone that is online!`)
                                .addField(`Who can add your money?`, `- ${message.author}`); 
     
     if (message.member.hasPermission("ADMINISTRATOR")) {
          message.guild.channels.find("name", "rollmo").send(x);
         message.delete();     
 }
         
     } else
             if (help === 'help') {
                 let mentionrollmo = message.guild.roles.find("name", "Rollmo"); 
                 let mentionprollmo = message.guild.roles.find("name", "Rollmo Premium");

                                let  helpmsg = new Discord.RichEmbed()
                                .setColor("#04ffff")
                                .addField(`/rollmo`, `Rolls an amount of money with the required role ${mentionrollmo} ($1 - $6666) or ${mentionprollmo} ($6666-$9999) .`)  
                                .addField(`/rollmo all`, `[Administrator Permission Required] Can roll an amount of money ($1000-$5000) for everyone!`) 
                                .addField(`/rollmo shutdown`, `[Administrator Permission Required] You can shutdown the bot whenever you want if there are bugs or if it needs repairs.`) 
                                message.channel.send(helpmsg);
                            } else 
              if (feedback === 'feedback') {  
                   let fbmessage = args.slice(1).join(' ');
                    let x = new Discord.RichEmbed()
                         .setColor("#0e0d0d")    
                         .addField(`${message.author.username}`, `${fbmessage}`);
     message.guild.channels.find("name", "feedback").send(x);
     message.delete();
     let y = new Discord.RichEmbed()
        .setColor("#6ceb3b")    
        .addField(`Success!`, `Your feedback has been sent to <@325012890656702465>!`);
     message.channel.send(y);
                              } else 
            if (changelog === 'changelog') {
            let noperms = new Discord.RichEmbed()
                    .setColor("#8b0000")    
                    .addField('Unable To Send Changelog', `You don't have permission!`);

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noperms);
                
                
                if (message.member.hasPermission("ADMINISTRATOR")) {
                let update = args.slice(2).join(' ');
                       let noverison = new Discord.RichEmbed()
                    .setColor("#8b0000")    
                    .addField('Unable To Send Changelog', `You don't put in a verison!`);
                    
                                           let noupdates = new Discord.RichEmbed()
                    .setColor("#8b0000")    
                    .addField('Unable To Send Changelog', `You don't put any updates about the changelog!`);
                    
                    if (!verison) return message.channel.send(noverison); 
                    if (!update) return message.channel.send(noupdates);
                      
                let changelog = new Discord.RichEmbed()
                    .setColor("#20B2AA")    
                    .addField(`Changelog ${verison}`, `${update}`); 
                 message.guild.channels.find("name", "rollmoupdates").send(changelog);
                 message.delete();
                    
                    let sentupdates = message.guild.channels.find("name", "rollmoupdates");
                    
                     let sent = new Discord.RichEmbed()
                    .setColor("#6ceb3b")    
                    .addField(`Changelog ${verison}`, `Changelog have been sent to ${sentupdates}!`);  
                    message.guild.channels.find("name", "penguinperms").send(sent);
                    
                    let general = message.guild.channels.find("name", "general");
                                         let sentgeneral = new Discord.RichEmbed()
                    .setColor("#20B2AA")    
                    .addField(`Changelog ${verison}`, `Changelog ${verison} has been released in ${sentupdates}!`)
                                          message.guild.channels.find("name", "general").send(sentgeneral);
            } 
                } else 
                                       if (count === 'count') {
                       // let fbmessage = args.slice(1).join(' ');
                        let fbmessage2 = args.slice(1)
                        //let transfer = fbmessage.length-1;
                        let transfer2 = fbmessage2.length;
                                                               let y = new Discord.RichEmbed()
                         .setColor("#b76de0")    
                         .addField(`Word Count`, `Words: ${Math.round(transfer2)}`)
                                           message.channel.send(y);
                        //message.channel.send(`Character count: ` + Math.round(transfer));
                        
                        
                    } else 
                      if (random === 'random') {
                         let x = message.guildmember.user.bot(false).random;
   message.channel.send(x);
                          } else 
    if (shutdown === 'shutdown') {
                                         let update = new Discord.RichEmbed()
                    .setColor("#20B2AA")    
                    .addField(`Shutdown`, `I've been shutdown due to an update or repair! Please stand by!`)
      
message.guild.channels.find("name", "general").send(update).then(() => {
            client.destroy().then(() => {
            })
        })
    }
 }
                               
  
             
     
     
     
module.exports.help = {
    name: "rollmo"
}
