//By: ZYKO MD
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa2
if (!args[0]) throw `MASUKAN URL FB`
let f = await fetch(`https://kyyrest.diki6969.repl.co/api/dowloader/fbdown?url=${args[0]}&apikey=e8e8bade`)
m.reply(md)
let x = await f.json()
let cap = `DOWNLOADER FACEBOOK`
await conn.sendButton(m.chat, `*Result*
`, cap, `${imgr + 'FACEBOOK'}`, [
                ['Get SD', `${usedPrefix}get ${x.result.Normal_video}`],
                ['Get HD', `${usedPrefix}get ${x.result.HD}`],
                ['Get Audio', `${usedPrefix}get ${x.result.audio}`]
            ], fkontak)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
