const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0", {
  webHook: {
      port: process.env.PORT || 8443
    } 
  });
const url = 'https://designach.herokuapp.com:8443';

bot.setWebHook(`${url}/bot`);
// bot.on('new_chat_members', ctx => {
//   ctx.reply("Привет! Показывай портфолио (если есть)");
// });

bot.on('new_chat_members', (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome');
});