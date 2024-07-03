require('dotenv').config()
const { GatewayIntentBits } = require('discord.js')

module.exports = {
    prefix: '!',
    token: process.env.DISCORD_TOKEN,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
}
