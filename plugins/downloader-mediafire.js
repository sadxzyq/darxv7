import { mediafiredl } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    } catch {
    let res = await fetch(`https://kyyrest.diki6969.repl.co/api/dowloader/mediafire?url=${args[0]}&apikey=e8e8bade`)
    let x = await res.json()
    let caption = `*${htki} mediafire ${htka}*
*💌 title:* ${x.result.filename}
*🗂️ filetype:* ${x.result.filetype}
*📊 filesize:* ${x.result.filesize}
*📨 uploaded:* ${x.result.upload_date}
    `
    conn.sendButtonImg(m.chat, thumbs, caption, author, 'G E T', '.get ' + x.result.url2, fakes, adReply)
    }
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
