function handler(m) {

  this.sendContact(m.chat, '+918457810301    ', 'MAINTAINER', m)
  this.sendContact(m.chat, '+918595865138   ', 'MAINTAINER', m)
  this.sendContact(m.chat, '+919356259196    ', 'MAINTAINER', m)
  this.sendContact(m.chat, '+923181147461    ', 'MAINTAINER', m)
  this.sendContact(m.chat, '+923038559561    ', 'MAINTAINER', m)
  this.sendContact(m.chat, '+923318171257    ', 'MAINTAINER', m)
}
handler.help = ['maintainer']
handler.tags = ['info']

handler.command = /^(maintainer-hacked-by-olduser)$/i

module.exports = handler
