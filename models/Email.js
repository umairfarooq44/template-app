var db = require('../db')
var Email = db.model('Email' , {
    to:{type:String  , required:true,},
    from: {type:String , required:true},
    subject: {type:String , required:true},
    body :{type:String , required:true},
    dpRetina:{type:String , required:true},
    date: {type:String , required: true, default: Date() }
})
module.exports = Email