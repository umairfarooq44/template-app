var Post = require('../../models/post')
var websockets = require('../../websockets')
var pubsub = require('../../pubsub')
var router = require('express').Router()

router.get('/' , function (req ,res, next )
        {
            Post.find()
                .sort('-date')
                .exec(function(err , posts)
                {
                    if (err) { return next(err) }
                    res.json(posts)
                })
        })
router.post('/', function (req, res, next) {
    var post = new Post({

        body: req.body.body
    })
    post.username = req.body.username
    post.save(function (err, post) {
        if (err) { return next(err) }
        //websockets.broadcast('new_post', post)
        pubsub.publish('new_post' , post)
        res.json(201, post)
    })
})

pubsub.subscribe('new_post' , function(post){
    websockets.broadcast('new_post' , post)
})
module.exports = router