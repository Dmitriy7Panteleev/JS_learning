const path = require('node:path')
const fs = require('fs')
/*
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err
    }

    console.log('папка создана')
})
*/
const filepath = path.join(__dirname, 'test', 'text.txt')

fs.writeFile(filepath, 'HelloJS!', (err) => {
    if (err) {
        throw err
    }

    console.log('файл создан1')

    fs.appendFile(filepath, '\nHelloJS again1!', (err) => {
        if (err) {
            throw err
        }
    
        console.log('файл дописан1')
    })

    fs.appendFile(filepath, '\nHelloJS again2!', (err) => {
        if (err) {
            throw err
        }
    
        console.log('файл дописан2')
    })
})

fs. readFile(filepath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    /*
    const data = Buffer.from(content)
    console.log('Content:', data.toString())
    */
    console.log(content)
})