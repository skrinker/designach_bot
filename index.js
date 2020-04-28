const { Telegraf } = require('telegraf');


const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://designach.herokuapp.com/';

const bot = new Telegraf("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0");

bot.on('new_chat_members', ctx => {
  ctx.reply("Привет! Показывай портфолио (если есть)");
});

bot.telegram.setWebhook(`${URL}/bot`);
bot.startWebhook(`${URL}/bot`, null, PORT);