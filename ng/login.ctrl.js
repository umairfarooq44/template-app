angular.module('app')
.controller('LoginCtrl' , function($scope , $location , LoginSvc){
    $scope.loginUser = function()
    {
        //console.log('login controller with login')
        var username = $scope.user.username
        var password = $scope.user.password
        var bool = false;
        LoginSvc.login(username , password)
            .then(function(user){
                $scope.$emit('login', user.data)
                console.log(user)
                console.log(user.data,'aur aise user login ho gya')
                bool = true;
                $location.path('/app/dashboard');

            })
        if(bool == false){
            $scope.user.username = null
            $scope.user.password
        }

    }
    $scope.signUp = function()
    {
        console.log('in login strl' , $scope.user.fname ,$scope.user.username )
        LoginSvc.signUp({firstname:$scope.user.fname ,lastname:$scope.user.lname
                ,username:$scope.user.username
            , password:$scope.user.password
            ,email:$scope.user.email})
            .then(function(user){
                console.log(user,'post wala')
                console.log(user.data)
                $location.path('/access/login');
            })
    }
    $scope.logout = function(){
         LoginSvc.logout($scope.currentUser).then()
        {
            console.log("logout skdjfksdfj")
            $scope.$emit('logout')
        }
    }
})