const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "$";
const TOKEN = "ODI0NzYzMTAyMzc2NjI0MTI4.YF0Gfg.o_qzQfAPrcSZGVdrrYWJMucqZR4"

var version = '1.0.1';

bot.on('ready', () => {
    console.log('Der Bot ist nun Einsatzbereit')

bot.user.setActivity('$help', { type:'STREAMING' }).catch(console.error)
})

bot.login(TOKEN)