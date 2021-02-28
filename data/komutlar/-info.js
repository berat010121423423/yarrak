const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");
const ayarlar = require("../ayarlar.json"); // ayarlar olarak girildi siz istediğiniz yere göre düzeltin
moment.locale('tr');

exports.run = async (client, message, args) => {

    let mention = message.author;
    if(message.mentions.members.first()) mention = message.mentions.members.first().user;
    let mentionMember = message.guild.members.cache.get(mention.id);
    let slm = {
        web: 'İnternet Tarayıcısı',
        desktop: 'Masaüstü',
        mobile: 'Mobil'
      }
let nitroDurum = false;
if(mention.presence.activities[0]) {
if(mention.presence.activities[0].emoji) {
if(mention.presence.activities[0].emoji.animated) nitroDurum = true;
};
};
if(mention.avatarURL().includes('.gif')) nitroDurum = true;

let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', '<:hyper:815558533805637634>')  
.replace('HOUSE_BRILLIANCE', '<:brilliance:815549268306690048>')
.replace('HOUSE_BALANCE', '<:balance:815549267199655937>')
.replace('VERIFIED_DEVELOPER', '<:botdevolper:815557985107181578>')
.replace('DISCORD_EMPLOYEE', '<:ortakdc:81555<:BugHunter:815549268269727745>8022423773204>')
.replace('PARTNERED_SERVER_OWNER', '<:swpartner:815549270198714408>')
.replace('HYPESQUAD_EVENTS', '<:hypsquead:815549270236725268>')
.replace('BUGHUNTER_LEVEL_1', '<:BugHunter:815549268269727745>')
.replace('EARLY_SUPPORTER', '<:earlynitro:815549264208855040>')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', '<:bughunter2:815549268622049320>')
.replace('VERIFIED_BOT', '<:onaylbot:815549268823506944>');
      let sa;
      if(mention.presence.status === "offline" || mention.bot) {
        sa = "Bağlandı yer gözükmemektir."
      } else {
        sa = slm[Object.keys(mention.presence.clientStatus)[0]];
      } 
  
    const jaus = new Discord.MessageEmbed()
    .setAuthor(`${mention.tag}`, mention.avatarURL({ dynamic: true}))
.setThumbnail(mention.avatarURL({ dynamic: true}))
.setDescription(`**➤ Kullanıcı bilgisi**
\`Kullanıcı ID\` **>** **${mention.id}**
\`Profil\` **>** **${mention}** ${mention.presence.status.replace('online', '<:discordonline:815521572534091796>').replace('idle', '<:discordIDL:815521614564556850> ').replace('dnd', '<:discorddnd:815521613625425950>').replace('offline', '<:discordoffline:815521614560362506>')}
\`Bağlandığı yer\` **>** **${sa}**
\`Kuruluş Tarihi\` **>** **${moment(mention.createdAt).format('D/MMMM/YYYY')}**
**➤ Kullanıcı bilgisi**
\`Sunucudaki Adı\` **>** **${mentionMember.displayName}**
\`Sunucuya Kayıt Tarihi\` **>** **${moment(mentionMember.joinedAt).format('D/MMMM/YYYY')}**
\`Rozetleri\` **>** ${rozetler ? mentionFlags : '**Rozeti yok.**'}
**•-------------------------- \`Roller\` --------------------------•**
${(mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' **|** ') : 'Hiç yok.')}
`)
.setFooter(mention.username, mention.avatarURL({dynamic: true}))
.setTimestamp()
.setColor("YELLOW")
message.channel.send(jaus)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kb","info"],
  permLevel: 0
};
 
exports.help = {
  name: "kullanıcı-bilgi"
};
