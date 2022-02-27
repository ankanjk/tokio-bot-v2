function handler(m) {

  this.sendContact(m.chat, '+919685736029', 'OLD USER', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler