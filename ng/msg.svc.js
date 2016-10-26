angular.module('app')
.service('MsgSvc' , function($http){
    this.getLoginUsers = function(){
        return $http.get('/api/loginUsers')
    }
    this.getUserMessages = function(user , user1){
        console.log('in msgsvc get messages',user , user1)
        var data = {senderId: user1._id ,recieverId:user._id}
        return $http.post('/api/messages' , data )
    }
    this.addMsg = function(message){
        return $http.post('/api/addmessage' , message)
    }
})
