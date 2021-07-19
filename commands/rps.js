const Discord = require('discord.js');

module.exports = {
  name: "rps",
  description: "bot plays rock paper scissor with you",
  async execute(client, message, args) {
      let embed = new Discord.MessageEmbed()
      .setTitle("RPS")
      .setDescription("react to play!")
      .setTimestamp()
      let msg = await  message.channel.send(embed)
      await msg.react("🗻")
      await msg.react("✂")
      await msg.react("📜")
      const filter = (reaction, user) => {
          return ['🗻','✂','📜'].includes(reaction.emoji.name) && user.id === message.author.id;
      }
     const choices =  ['🗻','✂','📜'] 
         const me = choices[Math.floor(Math.random() * choices.length)]
         msg.awaitReactions(filter, {max:1 , time:6000, error:["time"] }).then
         async(collected) => {
             const reaction = collected.first()
             let result = new Discord.MessageEmbed()
             .setTitle("result")
             .addField("your choice",`${reaction.emoji.name}`)
             .addField("bot's choice",`${me}`)
             await msg.edit(result)
             if((me ==="🗻" && reaction.emoji.name === "✂") ||
                (me ==="✂"
               && reaction.emoji.name === "📜")
                (me ==="📜" && reaction.emoji.name === "🗻")) {
                 message.reply("you lost!");


                } else if (me=== reaction.emoji.name) {
                  return message.reply("it's a tie!");
                }else {
                  return message.reply("you won!");
                }
             
             
             


         }
      }
  }
