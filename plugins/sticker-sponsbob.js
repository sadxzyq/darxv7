import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m,{text, conn}) => {
let res = 'https://api.zeeoneofc.my.id/api/telegram-sticker/sponsbob?apikey=RCo6vEcS'
m.reply(md)
let stiker = await sticker(null, res, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.help = ['sponsbob']
handler.tags = ['sticker']
handler.command = /^(sponsbob)$/i
export default handler