const TelegramBot = require('node-telegram-bot-api');

const options = {
  webHook: {
    port: process.env.PORT,
  },
};
const url = process.env.APP_URL || 'https://designach.herokuapp.com:443';
const bot = new TelegramBot("1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0", options);
bot.setWebHook(`${url}/bot1187109592:AAFwLsqet3zl3DD7kHgGnOSJxtC9AbLwyM0`);

// bot.setWebHook(`${url}/bot`);
// bot.on('new_chat_members', ctx => {
//   ctx.reply("Привет! Показывай портфолио (если есть)");
// });

bot.on('new_chat_members', (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome');
});