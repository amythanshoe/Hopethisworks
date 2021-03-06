const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async execute(client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`-kick`', 'Kicks a member from your server via mention or ID')
        .addField('`-ban`', 'Bans a member from your server via mention or ID')
        .addField('`-clear`', 'Purges messages')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`-meme`', 'Generates a random meme')
        .addField('`-ascii`', 'Converts text into ascii')
        .addField('`-play`', 'plays ur desired music')
        .addField('`-stop`', 'stops the queue')
        .addField('`-changemymind`', 'used for changemymind meme')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`-calculate`','get math calculations' )
        .addField('`-ping`', 'Get the bot\'s API ping')
        .addField('`-weather`', 'Checks weather forecast for provided location')
        .addField('`-covid`', 'Checks all the covid cases worldwide or in a specific country')
        
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}