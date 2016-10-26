var router = require('express').Router()
var config = require('../../config')
var websocket = require('../../websockets')
var pubsub = require('../../pubsub')

router.get('/' , function(req , res , next){
    //console.log('login users walalalala')
    console.log(config.loginUsers.length ,'ksjdfk')
    res.json(config.loginUsers)
})
router.post('/' , function(req , res , next){
    var index = -1
    for(var i = 0 ; i< config.loginUsers.length ; i++){
        if(config.loginUsers[i]._id == req.body._id) {
            index = i
            break;
        }
    }
    console.log(req.body)
    console.log(index , "index 0f user")
    if(index!= -1){
        config.loginUsers.splice(index , 1)
        console.log("hahah splice ho gya")

    }
    pubsub.publish('new_user' ,  config.loginUsers)
})

pubsub.subscribe('new_user', function (users) {
    websocket.broadcast('new_user' , users)
})

module.exports =router