var db = require('../db')
var User = db.model('User' , {
    firstname:{type:String , required: true},
    lastname:{type:String , required: true},
    username: {type:String , required:true},
    password: {type:String , required :true},
    email: {type:String , required:true}
})
module.exports = User
