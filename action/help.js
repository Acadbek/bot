const { bot } = require('../core/bot')

bot.help(ctx => {
  let text = `<b>Bizning botimizda bajarish mumkin bo'lgan komandalar: \n</b>` +
    `/start - <code>botni ishga tushuruvchi komanda</code>`

  ctx.replyWithHTML(text)
})