const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require ('./ayarlar.json')

var prefix = '**'

client.on('ready', () => {
  console.log(`Botun ${client.user.tag} Discorda Giriş Yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.channel.sendMessage(client.ping + 'ms');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('as');
  }
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.channel.sendMessage('Yakında');
  }
  if (msg.content.toLowerCase() === 'ahmet') {
    msg.channel.sendMessage('he');
  }
  if (msg.content.toLowerCase() === 'piç') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'yarrak') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'oç') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'ibne') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'salak') {
    msg.channel.sendMessage('Adını Sormadım');
  }
});

client.login('ayarlar.token');
