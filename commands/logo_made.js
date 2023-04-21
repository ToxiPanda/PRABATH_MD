

const { tlang,cmd,prefix } = require('../lib')
const Config = require('../config')
const maker = require('mumaker')

    //---------------------------------------------------------------------------
cmd({ pattern: "check", alias: ["testbot"], category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.react("✅")
        let anu = await maker.textpro('https://fdown.net/download.php', Url)
        Void.sendMessage(citel.chat, { video: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })
    })
                           

 //----------------------------------------------------------------------------

cmd({ pattern: "test1promote", alias: ["testbot"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        Void.sendMessage(citel.chat, { text: promote }, { quoted: citel })

    })
