const Discord = require('discord.js');
const ayarlar = require('../config.js');
const db = require("quick.db")

var prefix = ayarlar.prefix;



exports.run = async (bot, message, args) => {
  
  
      let kanal = ayarlar.botkomut;
      let basarili = ayarlar.onayemoji1;
      let basarisiz = ayarlar.redemoji2;
      let yetkili = ayarlar.üstyetkili;


  if(message.channel.id !== kanal) return message.react(basarisiz);

  
 if (!message.member.roles.cache.get(yetkili) & !message.member.hasPermission("ADMINISTRATOR")) return message.react(basarisiz);

 const kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(kullanici.id === message.author.id) return message.channel.send(new Discord.MessageEmbDed().setDescription(`**Kendine rol verip alamazsın.**`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0xd85555').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Bu Kullanıcı senden üst/aynı pozisyonda.**`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0xd85555').setTimestamp()).then(x => x.delete({timeout: 5000}));

  
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!rMember) return message.channel.send(new Discord.MessageEmbed().setDescription(`Rol vermem için bir kişiyi etiketlemelisin!`)).then(x => x.delete({timeout: 3000}));
    let role = message.mentions.roles.first()
    if (!role) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`Rol verebilmem için rolü belirtmelisiniz!`)).then(x => x.delete({timeout: 3000}));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(` Etiketlediğiniz rolü sunucuda bulamıyorum!`)).then(x => x.delete({timeout: 3000}));
    if (rMember.roles.cache.has(aRole.id)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('Bu rol bu kullanıcıda var zaten!')).then(x => x.delete({timeout: 3000}));
    await (rMember.roles.add(aRole.id))
 message.react(basarili)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver', 'rolekle'],
  permLevel: "0"
};

exports.help = {
  name: "rolver",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rolver <mesaj>"
};