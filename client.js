const net = require('net')

const client = net.createConnection({
    port: 3003
})

client.on('connect', () => {
    process.stdin.on('data', data => {
        data = data.toString().trim()

        client.write(data)
    })
})

client.on('data', data => {
    console.log(data.toString())
})

client.on('end', data => {
    client.write('sad')
    console.log('object')
})