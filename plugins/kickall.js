
let handler = async (m, { conn, participants }) => {
    let users = participants.map(user => user.jid)
    console.log("this is a log")
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        let IAmBot = users[i] == "918109939106@s.whatsapp.net"
        let owner = users[i] == "919685736029@s.whatsapp.net"
        let friend = users[i] == "919685736029@s.whatsapp.net"
        console.log(i)
        if(!IAmBot){
            conn.groupRemove(m.chat, [users[i]])
        }
    }
  }
  handler.help = ['kickall']
  handler.tags = ['admins']
  handler.command = /^(kickall)$/i
  handler.owner = true
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = true
  handler.botAdmin = false
  
  handler.fail = null
  handler.limit = true
  
  module.exports = handler
  
  