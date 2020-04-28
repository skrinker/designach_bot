const { Telegraf } = require('telegraf');

const port = 443;
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const bot = new Telegraf("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0", options);

bot.telegram.setWebhook(`https://designach.herokuapp.com:443/bot`);

// bot.on('new_chat_members', ctx => {
//   ctx.reply("Привет! Показывай портфолио (если есть)");
// });

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.startWebhook('bot', null, port);