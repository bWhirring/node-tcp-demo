const net = require('net')

const server = net.createServer()

let users = []
server.on('connection', socket => {
    users.push(socket)

    socket.on('data', data => {
        data = data.toString().trim()

        users.forEach(client => {
            if (client !== socket) {
                client.write(`${client.remotePort}: ${data}`)
            }
        })
    })

    socket.on('end', data => {
        console.log(data)
    })

    socket.on('error', () => {

    })
})


server.listen(3003, '127.0.0.1', () => {
    console.log(`server start`)
})