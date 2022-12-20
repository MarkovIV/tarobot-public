const TelegramApi = require('node-telegram-bot-api')

const token = '5827923507:AAENSiL7ZFD1rTGA8nNFwwmNRO_Dy8x_E4A'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', msg => {
	const text = msg.text
	const chatId = msg.chat.id

	bot.sendMessage(chatId, `Вы ввели сообщение: ${text}`)
})
