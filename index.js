const { Telegraf } = require('telegraf');

const token = "1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0";
const options = {
  webHook: {
    port: process.env.PORT,
  },
};
const bot = new Telegraf(token, options);
const url = process.env.APP_URL || 'https://designach.herokuapp.com:443';

bot.telegram.setWebhook(`${url}/bot${token}`);

bot.startWebhook(`/bot${token}`, null, process.env.PORT);

bot.on('new_chat_members', (ctx) => {
  ctx.reply('Привет! Показывай портфолио (если есть)', {reply_to_message_id: ctx.update.message.message_id});
});