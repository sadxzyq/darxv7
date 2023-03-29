import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	let urls = pickRandom(['https://telegra.ph/file/79ae938710ada6f4fe815.jpg"])
let cap = `
╭──────────────
│    「 Kartu Intro 」
│ Nama     :
│ Gender   :
│ Umur      : 
│ Hobby    :
│ Kelas      :
│ Asal         :
│ Agama    :
│ Status     :
╰──────────────
${wm}`
let t = '*I N T R O*'
let wibu = `https://api.zahwazein.xyz/randomanime/anime?apikey=85345ee3d9de` 
let thumb = await(await fetch(zykomd)).buffer()
conn.sendHydrated2(m.chat, t, cap, thumb, 'https://instagram.com/mydiam.is.fun', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ',[['Menu', `.menuv2`],
  ['Donasi', `.donasi`],['Sewa', `.sewa`]], m)   
}
handler.command = /^(intro)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}