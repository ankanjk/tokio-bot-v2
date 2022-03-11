let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw 'Please give me any link, Example: #tly https://github.com/jetushack4/popat'
let res = await (await fetch(`https://t.ly/api-create.php?url=${text}`)).buffer() 
m.reply(`${res}`)
}
handler.command = /^tly$/i
module.exports = handler