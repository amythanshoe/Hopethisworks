const canvacord = require('canvacord');
const Discord = require('discord.js');


module.exports = {
    name: "cmm",
    description: "Trigger yourself",


    async execute (client, message, args) {
        let text = args.join(" ")
        if (!text) return message.channel.send("please provide a text for the image")
        let image = await canvacord.Canvas.changemymind(text)
        let attachment = new Discord.MessageAttachment(image, "cmm.gif");
        message.channel.send(attachment)
         }
    }
