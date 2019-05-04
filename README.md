# han-telegram-chatbot
本專案利用最先進的「5G 雲端奈米分散式大數據深度學習」技術，經過 4 個月追蹤、嚴謹分析高雄市府政策後，我們非常自信地分享這個能完美通過圖靈測試的韓國瑜聊天機器人

# Require
- nodejs
- npm

# Install
```bash=
git clone git@github.com:pewsheen/han-telegram-chatbot.git
cd han-telegram-chatbot
npm install
```

# Start Bot Polling
1. Fill your Telegram Bot API Token in app.js
```javascript=
/* Telegram Bot Settings */
const token = '[Bot API Token]'; << [BotToken] 換成你的 Telegram Bot API Token
```
* [如何取得 Bot API Token](https://core.telegram.org/bots#3-how-do-i-create-a-bot)
2. Run command on command line
```bash=
npm run start
```
