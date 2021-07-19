const canvacord = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "trigger",
    description: "Trigger yourself",
    aliases:['tr'],


    async execute (client, message, args) {
        let msg = message.channel.send("triggering....");
        let user = message.mentions.users.first()||message.author;
        let image = await canvacord.Canvas.trigger(user.displayAvatarURL({dynamic: false, format:"png", size: 1024}))
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
         message.channel.send(attachment);
         
         }
    }

