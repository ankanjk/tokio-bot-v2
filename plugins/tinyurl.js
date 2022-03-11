let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw 'Please give me any link, Example: #tinyurl https://github.com/jetushack4/popat'
let res = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).buffer() 
m.reply(`${res}`)
}
handler.command = /^tinyurl$/i
module.exports = handler