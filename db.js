
/*var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/template',function(){
    console.log('Mongodb connected')
})
module.exports = mongoose*/


var mongoose = require('mongoose')
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/template'
mongoose.connect(url)
module.exports = mongoose