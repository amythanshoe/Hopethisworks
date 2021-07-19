
module.exports ={
    name: 'play',
    description: 'plays a song from youtube',
    async execute(client, message, args){
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
        let search = args.join(" ")
        if(!search) return message.channel.send("please provide a search query");

        client.player.play(message, search)
    }
}