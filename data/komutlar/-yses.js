const Discord = require('discord.js')

exports.run = async (client, message, args) => {
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter('Merhaba ben Niwren');
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(embed.setDescription("Bu Komut İçin Yetkin Bulunmuyor.")).then(x => x.delete({ timeout: 3000 }))
        }
        let sesteolmayan = message.guild.members.cache.filter(s => s.roles.cache.has('814057847116660801')).filter(s => !s.voice.channel).map(s => s).join('\n')
        message.channel.send(`**__Seste olmayan yetkililer:__**\n${sesteolmayan} \n**----------------------------------------------------------------------------------------------------**\`\`\`Merhabalar Sunucumuzun İlerlemesi için lütfen müsait isen public odalara değil isen secret odalarına geçer misin?\`\`\``)
    
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["etiketsay","yses"],
    permLevel: 0
};
exports.help = {
    name: "etiketsay",
    description: "Belirtilen Etikette Kaç Kişi Olduğunu Gösterir",
};

