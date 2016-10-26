var router = require('express').Router()
var Email = require('../../models/Email')
var websocket = require('../../websockets')
var pubsub = require('../../pubsub')



router.get('/' , function (req , res, next){


    Email.find()
        .sort('-date')
        .exec(function(err , emails){
            if(err){return next(err)}
            console.log(emails.length)
            var final = {emails:[]}
            var abc= {group:"", list:[]}
            var prev = ""
            var index = -1;
            for (var i =0 ; i < emails.length ; i++){
                if(prev == emails[i].date.slice(4, 10) ){
                    //abc.group = prev;
                   // abc.list.push(emails[i])



                    final.emails[index].list.push(emails[i])
                    //console.log('hahahaha')

                }
                else{
                    index++
                    prev = emails[i].date.slice(4, 10)
                    final.emails.push({group:prev, list:[emails[i]]})
                    //final.emails.push(abc)
                    //abc.group = emails[i].date.slice(4, 10)
                    //final.emails[index].group = emails[i].date.slice(4, 10)
                    //final.emails[index].list.push(emails[i])
                    //console.log(prev ," dkfd", i, " df" ,emails[i] )
                   // abc.list = []
                    //abc.list.push(emails[i])

                }
            }
            //final.emails.push(abc)


            res.json(final)
        })

})




router.post('/' , function (req , res, next){

    var email = new Email({
        to:req.body.to,
        from: req.body.from,
        subject:req.body.subject,
        body:req.body.body,
        dpRetina :"assets/img/profiles/avatar2x.jpg"
    })

console.log(email)
    //console.log('This is messager in addmessage.js ' , message)
    email.save(function(err , message){
        if(err)
            return next(err)
        pubsub.publish('new_email' ,  message)
        //websocket.broadcast('new_msg' ,  message)
        res.json(message)
    })

})

pubsub.subscribe('new_email', function (message) {
    websocket.broadcast('new_email', message)
})
module.exports =router