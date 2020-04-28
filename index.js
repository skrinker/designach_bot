const { Telegraf } = require('telegraf');

const bot = new Telegraf("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0");
const port = 8443;
bot.telegram.setWebhook(`https://designach.herokuapp.com:${port}/bot`);

// bot.on('new_chat_members', ctx => {
//   ctx.reply("Привет! Показывай портфолио (если есть)");
// });

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.startWebhook('/bot', null, port);