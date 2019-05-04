const TelegramBot = require('node-telegram-bot-api');

/* Telegram Bot Settings */
const token = '';
const bot = new TelegramBot(token, {polling: true});

const responseMsg = '發大財！';

bot.onText(/.*高雄.*/, (msg) => {
    const chatId = msg.chat.id;
    const chatType = msg.chat.type;

    if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel')
        bot.sendMessage(chatId, responseMsg);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const chatType = msg.chat.type;
    
    if (chatType === 'private')
        bot.sendMessage(chatId, responseMsg);
});