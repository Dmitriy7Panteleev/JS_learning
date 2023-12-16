const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    let filepath = path.join(__dirname, 'html', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filepath)
    if (!ext) {
        filepath += '.html'
    }
    let contenttype = 'text/html'
    switch (ext) {
        case '.css': 
            contenttype = 'text/css'
            break
        case '.js': 
            contenttype = 'text/javascript'
            break
        default:
            contenttype = 'text/html'
    }
    console.log(filepath)
    fs.readFile(filepath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'html', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': contenttype
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contenttype
            })
            res.end(content)
        }
    })
})
server.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`)
})
