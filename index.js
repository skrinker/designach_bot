const { Telegraf } = require('telegraf');

const bot = new Telegraf("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0");

bot.telegram.setWebhook('https://designach.herokuapp.com:443/');

bot.on('new_chat_members', ctx => {
  ctx.reply("Привет! Показывай портфолио (если есть)");
});

bot.startWebhook('/bot', null, 443);