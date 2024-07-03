require('dotenv').config()
const { Client, Events } = require('discord.js')
const { intents, prefix, token } = require('./config.js')
const helpCommand = require('./commands.js')

// Crear cliente
const client = new Client({
    intents,
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
    console.log(`Conectado como ${client.user.username}`);
})

// Conectar cliente
client.login(token)
