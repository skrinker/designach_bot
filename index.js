const { Telegraf } = require('telegraf');


const URL = 'https://designach.herokuapp.com';
const PORT = process.env.PORT || 443;

const bot = new Telegraf("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0");

bot.on('new_chat_members', ctx => {
  ctx.reply("Привет! Показывай портфолио (если есть)");
});

bot.telegram.setWebhook(`${URL}:${PORT}`);
bot.startWebhook(`${URL}/`, null, PORT);