var _ = require('lodash')
var ws = require('ws')
var clients = []

exports.connect = function(server){
    var wss = new ws.Server({server:server})
    wss.on('connection' , function(ws)
    {
        clients.push(ws)
        exports.broadcast('new client joined')
        console.log(ws.length)
        ws.on('close' , function()
        {
            _.remove(clients , ws)
            console.log("Client removed")
        })
    })

}
exports.broadcast = function (topic, data) {
    var json = JSON.stringify({topic: topic, data: data})
    console.log(topic)
    clients.forEach(function (client) {
        console.log("hahahaha websocket ")
        client.send(json )
    })
}