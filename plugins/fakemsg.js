let handler = m => {
    let msgs = global.db.data.msgs
    m.reply(`
*Hello Everyone Virtual Number Available At Cheap Rate Virtual Nunber Permanent Ir Temporarily Both Available*

${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(vn|msg|video|audio|img|sticker)$/

module.exports = handler