var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(require('./auth'))
app.use(require('./controller/static'))

app.use('/api/sessions', require('./controller/api/sessions'))
app.use('/api/users', require('./controller/api/users'))
app.use('/api/loginUsers', require('./controller/api/loginUsers'))
app.use('/api/messages', require('./controller/api/messages'))
app.use('/api/addmessage', require('./controller/api/addmessage'))
app.use('/api/compose', require('./controller/api/compose'))
app.use('/api/upload', require('./controller/api/upload'))
app.use('/api/posts', require('./controller/api/posts'))

var server = app.listen(8080 , function(){
    console.log("Listening on 8080")
})
require('./websockets').connect(server)
