angular.module('app')
    .service('ComposeSvc' , function($http) {

        this.sendEmail =function(email){
           // console.log(email)
            return $http.post('/api/compose' , email)

        }

    })