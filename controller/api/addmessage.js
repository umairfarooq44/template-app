var router = require('express').Router()
var Message = require('../../models/message')
var websocket = require('../../websockets')
var pubsub = require('../../pubsub')

router.post('/' , function (req , res, next){

    var message = new Message({
        senderId:req.body.senderId,
        senderName: req.body.senderName,
        recieverId:req.body.recieverId,
        recieverName:req.body.recieverName,
        messageBody:req.body.messageBody
    })
    console.log('This is messager in addmessage.js ' , message)
    message.save(function(err , message){
        if(err)
            return next(err)
        pubsub.publish('new_msg' ,  message)
        //websocket.broadcast('new_msg' ,  message)
        res.json(message)
    })

})

pubsub.subscribe('new_msg', function (message) {
    websocket.broadcast('new_msg', message)
})
module.exports =router