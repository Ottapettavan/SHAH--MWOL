const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://www.linkpicture.com/q/20220327_102035.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*AFIYA MWOL* CODDED BY KHADHER
Creator number 👉: wa.me/917025191792

Githublink (Setup)  👇:    https://github.com/khadher05/AFIYA-MWOL

PUBLIC BOT GROUP 👇: https://chat.whatsapp.com/FhPPp43dYlNLi499ZJuq5X


`}) 

}));
