const { Telegraf } = require('telegraf');

const token = "AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0";
const options = {
  webHook: {
    port: process.env.PORT,
  },
};
const bot = new Telegraf(token, options);
const url = process.env.APP_URL || 'https://designach.herokuapp.com:443';

bot.telegram.setWebHook(`${url}/bot${token}`);

bot.startWebhook(`/bot${token}`);
// bot.setWebHook(`${url}/bot`);
// bot.on('new_chat_members', ctx => {
//   ctx.reply("Привет! Показывай портфолио (если есть)");
// });

bot.on('new_chat_members', (ctx) => {
  ctx.reply('Hello');
});