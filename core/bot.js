
const { Telegraf } = require('telegraf')

const token = process.env.TOKEN

const bot = new Telegraf(token)

bot.launch().then()

module.exports = {
  bot
}