const Discord = require("discord.js");
module.exports ={
    name:'avatar',
    aliases:['a','av'],
    description:'this is a greet command',
    execute(client, message, args){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  const  embed = new Discord.MessageEmbed()
    
 
    .setTitle(`${message.author.username}'s Avatar`)
    .setImage(user.user.displayAvatarURL({ size: 4096,dynamic: true}))
    .addField(`username`,`${message.author.username}`)
    .setColor(`#7CFC00`)
    message.channel.send(embed);

    }

}

