let handler = async m => m.reply(`
☕ *Olduser Tokio* a whatsapp bot\n\n🔗 *URL :* hhttps://github.com/Jetushack3/tokio-bot-olduser
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^oldusertokio|olduserrepo$/i

module.exports = handler
