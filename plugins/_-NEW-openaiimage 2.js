// • By Zyko-MD

import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
await m.reply('Searching...')
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`
  
  conn.sendHydrated2(m.chat, 'Nih', wm3, res,  'https://instagram.com/mydiam.is.fun', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`],
  ['Owner', `.owner`]], m)
  
}
handler.help = ['aiimage', 'imageai']
handler.tags = ['fun']
handler.command = /^(aiimage|imageai)$/i
handler.limit = false

export default handler
       