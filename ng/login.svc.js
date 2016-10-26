angular.module('app')
.service('LoginSvc' , function($http){
    var svc = this;
    svc.getUser = function(){
        return $http.get('/api/users')

    }
    svc.login = function(username , password){
        console.log('login service with login')
        return $http.post('/api/sessions' , {
            username:username , password: password}
        ).then(function(val){
                $http.defaults.headers.common['X-Auth'] = val.data
                return svc.getUser()

            })

    }
    svc.signUp = function(user){
        console.log(user)
        return $http.post('/api/users' , user)
    }
    svc.update = function(user){
        return $http.put('/api/users' , user)
    }
    svc.logout = function(user){
        return $http.post('/api/loginUsers' , user)
    }
})