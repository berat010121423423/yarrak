const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;

    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);

    const ramo = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );
    
   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${kullanıcı} Başarıyla Afk Moduna Geçtiniz.<a:Infected_fingersign:804052164544168007>  \nSebebi: **__${ramo}__**`))
    message.member.setNickname(`[AFK] ` + b);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let goldsaw = message.mentions.roles.first()

    let kullanıcı = message.guild.members.cache.get(message.author.id);
  if(sebep.toLowerCase().includes(".com") || sebep.toLowerCase().includes("youtube.com") || sebep.toLowerCase().includes("discord.gg")|| sebep.includes("http") || sebep.includes(goldsaw) || sebep.includes("@here") || sebep.includes("@everyone")) return  [message.delete(10),message.reply("**AFK Moduna Link veya Rol ile Giremezsin.**").then(msg => msg.delete(9000))]

    const b = kullanıcı.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const ramo = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${kullanıcı} Başarıyla Afk Moduna Geçtiniz.<a:Infected_fingersign:804052164544168007>  \nSebebi: **__${ramo}__**`))

    message.member.setNickname(`[AFK] ` + b);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};

