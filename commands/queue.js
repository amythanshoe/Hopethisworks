module.exports ={
    name: 'queue',
    description: 'plays a song from youtube',
    async execute(client, message, args){
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");
        let queue =  await client.player.getQueue(message)
        if(!queue) message.channel.send ('party is over , no more songs')
        const q = queue.songs.map((song, i) =>  ` ${i === 0 ? "PLAYING:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(q)
       
    }
}