import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tag = `@${m.sender.split`@`[0]}`
  let mentionedJid = conn.parseMention(tag)
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://vt.tiktok.com/ZS8XRFgsP/` 
try {
 let start = (md)
 let boost = `${pickRandom(['▰▰▰▰▰▰▱▱ 98'])}%`
 let boost2 = `${pickRandom(['▰▰▰▰▰▰▰▱ 99'])}%`
 let boost3 = `${pickRandom(['▰▰▰▰▰▰▰▰ 100 𝚠𝚊𝚒𝚝'])}%`
 
   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = `
Description:
${jsoon.description}`

await conn.sendHydrated2(m.chat, `Done` + ' ' + tag, done, json.video, 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@zykobotz', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ',
[[emojis + 'Donasi', `.donasi`],
[emojis + 'Audio', `.tikaudio ${args[0]}`],
[emojis + 'Speed', '.speed']], m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok2|tt2)$/i
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}