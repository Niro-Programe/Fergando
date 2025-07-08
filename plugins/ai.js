const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
cmd({
    pattern: "ai",
    react: "✨",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://lakiya-api-site.vercel.app/ai/gemini?q=ඔයාවහැදුවෙකවුද&CREATOR=Fergando`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


