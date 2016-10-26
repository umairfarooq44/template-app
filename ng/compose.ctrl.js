angular.module('app')
    .controller('ComposeCtrl' , function($scope ,$window, $location , ComposeSvc  ){


        $scope.sendEmail = function(){
            console.log($scope.comTo , $scope.composecc , $scope.composebody)
            $scope.sdf = $window.siapa
            console.log('ksdmfksd' ,$scope.sdf)
            ComposeSvc.sendEmail({to:$scope.comTo ,cc:$scope.composecc
            ,subject:$scope.composesubject , body:$scope.sdf , from: $scope.currentUser.email})
                .success(function(email){
                    console.log("ho gya",email)
                    $location.path('/app/email/inbox/');

                })
        }
        //$scope.composebody ;

    })