const express = require('express')
const QRCode = require('qrcode')

const server = express()
const PORT = process.env.PORT || 3000

server.get('/generate', async (req, res) => {
    const url = req.query.url
    if (!url) {
        return res.status(400).send('no URL!')
    }

    try {
        const qr = await QRCode.toDataURL(url);
        res.send(`<img src="${qr}" />`);
      } catch (err) {
        res.status(500).send('QR_generate ERROR!');
      }
})


server.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`)
})