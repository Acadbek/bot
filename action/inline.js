const { Markup } = require('telegraf')
const { bot } = require('../core/bot')

bot.command('inline', ctx => {

  const keyboard = Markup.inlineKeyboard(
    [
      Markup.button.url('Google', 'google.com')
    ]
  )

  ctx.telegram.sendMessage(
    ctx.from.id,
    "Testing url buttons",
    {
      reply_markup: keyboard
    }
  ).then()
})