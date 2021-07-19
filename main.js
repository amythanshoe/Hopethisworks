const Discord = require('discord.js');
const client = new Discord.Client();
const  distube = require('distube');
const  player =  new distube(client);
const db = require('quick.db');
const DisTube = require('distube')



client.on("messageDelete", async(message,channel) => {
    if(message.author.client) return;
    if(!message.guild) return;
    client.snipe.set(message.channel.id, {
        msg:message.content,
        user:message.author.tag,
        profilephoto:message.author.displayAvatarURL(),
        image:message.attachments.first() ? message.attachments.first().proxyURL : null,
        date:message.createdTimestamp
        `msnipe.${message.guild.id}`
    })
})
player.on("playSong", (message, queue, song) => {
  let playingEmbed = new Discord.MessageEmbed()
  .setColor("#6de3b8")
  .setTitle(`🎵 Now Playing 🎵`)
  .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
  .setFooter(`Requested by ${song.user.tag}`, message.author.displayAvatarURL(' '))
  message.channel.send(playingEmbed)
})
.on("addSong", (message, queue, song) => {
  let queueEmbed = new Discord.MessageEmbed()
  .setColor("#6de3b8")
  .setTitle(`✅ Added to the Queue ✅`)
  .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
  .setFooter(`Requested by ${song.user.tag}`, message.author.displayAvatarURL(' '))
  message.channel.send(queueEmbed)
})
.on("playList", (message, queue, playlist, song) => {

  message.channel.send(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``)
})
.on("addList", (message, queue, playlist) => message.channel.send(
  `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
))
// DisTubeOptions.searchSongs = true
.on("searchResult", (message, result) => {
  let i = 0;
  message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
// DisTubeOptions.searchSongs = true
.on("searchCancel", (message) => message.channel.send(`**Searching canceled!**`))
.on("error", (message, e) => {
  console.error(e)
  message.channel.send("An error encountered: " + e);
});
client.player = player;
client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler','event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client);
})

client.login('ODU3Mjc5OTYzNTY0ODY3NTk1.YNNSLg.Iilo-803DvoqQnCBZraa9bvWkTg');