const { EmbedBuilder } = require('discord.js')
const { prefix } = require('../src/config')

const commands = {
    'help': {
        description: 'Shows the list of commands and their details.',
        format: 'help'
    },
    'ping': {
        description: 'Checks connectivity with discord\'s servers.',
        format: 'ping'
    },
    'say': {
        aliases: ['repeat'],
        description: 'Repeats whatever is said.',
        format: 'say <message>'
    }
}

function helpCommand(message) {
    const footerText = 'Pedido por: ' + message.author.tag
    const footerIcon = message.author.displayAvatarURL()
    const embed = new MessageEmbed()
        .setTitle('HELP MENU')
        .setColor('WHITE')
        .setFooter({ text: footerText, iconURL: footerIcon })
        .setTimestamp()

    for (const commandName of Object.keys(commands)) {
        const command = commands[commandName]
        let desc = command.description + '\n\n'
        if (command.aliases)
            desc += `**Aliases :** ${command.aliases.join(', ')}\n\n`
        desc += '**Format**\n```\n' + prefix + command.format + '```'
        embed.addField(commandName, desc, false)
    }
    return embed
}

module.exports = helpCommand