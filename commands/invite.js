
const Discord = require('discord.js');

module.exports = {
  name: "invite",
  async execute(client, message, args) {
    
    const embed = new Discord.MessageEmbed()
    const color = "RANDOM"
const title = "Invite Me!"
const inviteLink = " https://discord.com/oauth2/authorize?client_id=857279963564867595&scope=bot&permissions=0"
 
    embed.setURL(inviteLink)
    embed.setTitle(title)
    embed.addField("Add me to your server. I will make great use", "You won't regret it.")
    embed.setFooter("BOT created by amythanshoe#6960")
    message.channel.send({ embed})
  }
}