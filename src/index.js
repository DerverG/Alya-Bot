require('dotenv').config()
const { Client, Events } = require('discord.js')

const token = process.env['DISCORD_TOKEN']
const prefix = '!'

// Crear cliente
const client = new Client({
    intents: 1536,
    presence: {
        status: 'online',
        activities: [{
            name: `${prefix}help`,
            type: 'LISTENING'
        }]
    }
})

// Eventos
client.on(Events.ClientReady, async () => {
    console.log(`Conectado como  ${client.user.username}`);
})

// Conectar cliente
client.login(token)