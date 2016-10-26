angular.module('app')
    .controller('PostsCtrl', function ($scope, PostsSvc) {
        $scope.addPost = function () {
            console.log("sdjfkdsjfk")
            if ($scope.postBody &&$scope.currentUser) {
                console.log($scope.postBody , "sdkjgkfdj",$scope.currentUser.firstname )
                PostsSvc.create({
                    username: $scope.currentUser.firstname +  " " + $scope.currentUser.lastname,
                    body: $scope.postBody
                }).success(function (post) {
                    //$scope.posts.unshift(post)
                    $scope.postBody = null
                })
            }
        }

        PostsSvc.fetch().success(function (posts) {
            $scope.posts = posts
        })
        $scope.$on('ws:new_post', function (_, post) {
            $scope.$apply(function () {
                $scope.posts.push(post)
            })
        })
    })