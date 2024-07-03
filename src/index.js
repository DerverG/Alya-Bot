require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');
const { intents, prefix, token } = require('./config.js');
const helpCommand = require('../commands/help.js'); // Asegúrate de que el path sea correcto

// Crear cliente
const client = new Client({
    intents
})

// Eventos
client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}`);

    // Configurar la presencia del bot después de estar listo
    client.user.setPresence({
        status: 'online',
        activities: [{
            name: `${prefix}help`,
            type: 'LISTENING'
        }]
    })
})

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) {
        return
    }
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(' ')
        const command = args.shift()

        try {
            const serverId = message.guild.id
            const serverName = message.guild.name
            switch (command) {
                case 'help':
                    try {
                        const embed = helpCommand(message)
                        embed.setThumbnail(client.user.displayAvatarURL())
                        await message.channel.send({ embeds: [embed] })
                        break
                    } catch (error) {
                        console.error(`------ ServerID: ${serverId} ServerName: ${serverName} ------`)
                        console.error(`Error ejecutando help command: `, error)
                    }
                    break

                case 'ping':
                    const msg = await message.reply('pong!')
                    break

                case 'say':
                case 'repeat':
                    if (args.length > 0) {
                        await message.channel.send(args.join(' '))
                    }
                    break
            }
        } catch (error) {
            console.error(`Error procesando el comando: `, error)
        }
    }
})

// Conectar cliente
client.login(token);
