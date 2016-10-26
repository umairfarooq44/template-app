var db = require('../db')
var Message = db.model('Message' , {
    senderId:{type:String  , required:true,},
    senderName: {type:String , required:true},
    recieverId: {type:String , required:true},
    recieverName :{type:String , required:true},
    messageBody:{type:String , required:true},
    date: {type:String , required: true, default: Date.now  }
})
module.exports = Message