// BY ZYKO MD
import fetch from 'node-fetch'
import fs from 'fs'
import { promises, readFileSync } from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa2
let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://vt.tiktok.com/ZS8XRFgsP/` 
let f = await fetch(`https://kyyrest.diki6969.repl.co/api/dowloader/tikok?url=${args[0]}&apikey=e8e8bade`)

let x = await f.json()
let cap = `username: ${x.result.username}
description: ${x.result.description}

${wm}`
await conn.sendButton(m.chat, `*DOWNLOADER TIKTOK*
`, cap, `${imgr + 'TIKTOK'}`, [
                [em.getRandom() + 'Get Watermark', `${usedPrefix}get ${x.result.video_watermark}`],
                [em.getRandom() + 'Get NoWatermark', `${usedPrefix}get ${x.result.video}`],
                [em.getRandom() + 'Get Audio', `${usedPrefix}get ${x.result.audio}`]
     ], fkontak)
}
 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i
export default handler

