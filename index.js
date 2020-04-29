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
  var name = '@' + ctx.update.message.new_chat_member.first_name;
  ctx.reply(`Привет, ${name}! Показывай портфолио (если есть)`);
});
