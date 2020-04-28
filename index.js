const { Telegraf } = require('telegraf');
const express = require('express')
const app = express()

const bot = new Telegraf("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0");

app.use(bot.webhookCallback('/bot'));
bot.telegram.setWebhook(`https://designach.herokuapp.com:8443/bot`);

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

// bot.on('new_chat_members', ctx => {
//   ctx.reply("Привет! Показывай портфолио (если есть)");
// });

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.startWebhook('bot', null, port);