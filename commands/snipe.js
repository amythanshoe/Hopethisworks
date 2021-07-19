const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
    name: "snipe",
    description: "snipes a deleted message",

    async execute(client, message, args) {

        let snip = db.fetch(`msnipe.${message.guild.id}`)

        if(!snip) return message.channel.send("Nothing to snipe.")
        let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(snip.user, snip.profilephoto)
        .setDescription(`**message:**\`${snip.msg}\``)
        if(snip.image) return embed.setImage(snip.image)
        message.channel.send(embed)
        
        
    
        
    }
}