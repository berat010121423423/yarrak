const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) 
    if(!message.member.roles.cache.has('ID'))
    if(!message.member.roles.cache.has('ID'))
		    return message.channel.send('Bu komudu kullanman için yetkin yok.') 
 const filter = (reaction, user) => {
        return ["✅"].includes(reaction.emoji.name) && user.id === message.author.id; 
    };
    if (!args[0]) return message.channel.send("**Bir rol girin.**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Geçerli bir rol gir.**");
        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user;
        })

        const status = {
            false: "<a:croz:806650760104247327>",
            true: "<a:tik:806650771281412119>"
        }
    let sesteolmayan = message.guild.members.cache.filter(s => s.roles.cache.has(role.id)).filter(s => s.presence.status !== "offline").filter(s => !s.voice.channel).map(s => s).join(' ')
    let sesteolan = message.guild.members.cache.filter(s => s.roles.cache.has(role.id)).filter(s => s.voice.channel).map(s => s).join(', ')

        message.channel.send(`
**Rol ismi:** \`${role.name}\`
**ID:** \`${role.id}\`
**Rol rengi:** \`${role.hexColor}\`
**-------------------------------------------------------**
Rolde **__${role.members.size}__** kişi var.
Bulunduğu pozisyon: **__${role.position}__**
**Bahsedilebilir mi:** **${status[role.mentionable]}**
Roldeki üyeler: 
${membersWithRole.join(" **|** ")}
**Seste olan/olmayanları öğrenmek için tepkiye tıklayın.**

       
`).then(x => {
x.react("✅");  
x.awaitReactions(filter, {max: 1, time: 10000, error: ['time']}).then(z => {
            let donut = z.first();
            if (donut) {
				
			  x.edit(`\`${role.name}\` Rölünde: \n__**Seste olanlar:**__\n ${sesteolan}\n__**Seste olmayan**__: \n ${sesteolmayan}\n\nNOT: SADECE ÇEVRİMİÇİ ÜYELERİ GÖSTERİYORUM.`);
            };
        });
	    });		
        
    

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'rolinfo'
  };
