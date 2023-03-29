import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'Script Recode By : https://github.com/sadxzyq

 Dont Forget Give Star
Base By : https://github.com/DikaArdnt/satt-Morou'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'Source Code', 
               body: 'CRY Md',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^sc|script$/i
 export default handler