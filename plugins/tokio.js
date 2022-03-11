let handler = async m => m.reply(`
☕ *Olduser Tokio* a whatsapp bot\n\n🔗 *URL :* https://github.com/Jetushack3/tokio-bot-olduser
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^olduser-tokio|olduser-repo$/i

module.exports = handler
