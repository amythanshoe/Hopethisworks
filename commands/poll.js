const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'poll',
   aliases: ['polling'],
   description: "create polls",
    async execute(client, message, args) {
      
      if(!message.member.hasPermission('MANAGE_GUILD'))return message.channel.send("❌ You dont have permission to use this command")
      
      if(!args[0])
      return message.channel.send('Please enter the Query');
      
      const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Poll For ${message.guild.name} Server`)
      .setDescription(args.join(' '))
      .setFooter(message.member.displayName, message.author.displayAvatarURL(' '))
      const msg = await message.channel.send(embed)
      
      await msg.react('✅')
      await msg.react('❌')
}
}