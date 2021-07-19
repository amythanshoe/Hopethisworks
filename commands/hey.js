module.exports ={
    name:'hey',
    aliases:['rick'],
    description:'this is a greet command',
    execute(client, message, args){
        message.channel.send('https://tenor.com/view/gun-goodbye-point-rick-astley-gif-17678867');
    }

}