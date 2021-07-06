const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')

client.on('ready', async () => {

    console.log(`${client.guilds.cache.size} guilds are gonne be amazed`)
 
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Server | c!help`, { type: 'WATCHING' })
    }, 60000); 
    
})

client.on('message', async message => {
    if(message.content === 'c!help') {
        message.channel.send('Help command hasn\'t been created yet')
    }

    if(message.content === 'c!simjoin') {
        client.emit('guildMemberAdd', message.member)
    }

    if(message.content === 'c!simleave') {
        client.emit('guildMemberRemove', message.member)
    }
})

client.on('guildMemberAdd', async function(member) {
    const welcome = client.channels.cache.get('861956764819128340')
    const embed = new Discord.MessageEmbed
    embed.setTitle(`Welcome to Commute-Craft's Discord server`)
    embed.setThumbnail(member.user.avatarURL())
    embed.setColor('#97CDFF')
    embed.setDescription(`${member} we are enjoyed to see you here \n\n Make sure to read all the rules in <#861953148352069692> and follow them to have a fun time here \n\n Check out <#861949835161370654> and <#861952333076234300> to start playing on the smp \n\n Post your game highlights in <#861956704778584125 or chat with other fellow minecrafters in <#861964367267889176>`)
    welcome.send(embed)
})

client.on('guildMemberRemove', async function(member) {
    const welcome = client.channels.cache.get('861973194947690507')
    const embed = new Discord.MessageEmbed
    embed.setThumbnail(member.user.avatarURL())
    embed.setColor('#97CDFF')
    embed.setTitle(`Goodbye`)
    embed.setDescription(`We hope you enjoy your stay ${member}. We'll miss you \n Hope you come back again.`)
    welcome.send(embed)
})

client.login(config.token)
