/* ============================================================
 * File: main.js
 * Main Controller to set global scope variables. 
 * ============================================================ */

angular.module('app')
    .controller('AppCtrl', ['$scope', '$rootScope', '$state'  , function($scope, $rootScope, $state ) {









        $scope.modal = {};
        $scope.modal.slideUp = "default";
        $scope.modal.stickUp = "default";
        // $('#modalSlideUpSmall').modal('show')
        $scope.coverPhotoSrc = 'assets/img/social/quote.jpg'


        $scope.changeSrc = function(){

            $scope.coverPhotoSrc = 'assets/img/social/quote.jpg'
            //var abc = 'assets/img/social/quote.jpg'
            var abc =$scope.coverPhotoSrc
            $('.cover-photo').css({'background-image':'url( '+ abc  + ')'});

        }
        $scope.coverModal = function(){
            console.log("hahahahha modal")
            var modalElem = $('#myModal');
            $('#modalSlideUp').modal('show')
            modalElem.children('.modal-dialog').removeClass('modal-lg');
        }












        // App globals
        $scope.app = {
            name: 'Pages',
            description: 'Admin Dashboard UI kit',
            layout: {
                menuPin: false,
                menuBehind: false,
                theme: 'pages/css/pages.css'
            },
            author: 'Revox'
        }
        // Checks if the given state is the current state
        $scope.is = function(name) {
            return $state.is(name);
        }

        $scope.$on('login', function (_, user) {

            //console.log("In ap ctrl")
            $scope.currentUser = user
            /*$scope.userfirstname = user.firstname
            $scope.userlastname = user.lastname
            $scope.useremail = user.email
            $scope.userId = user._id*/

        })
        $scope.$on('logout' , function(){
            $scope.currentUser = null
        })
        // Checks if the given state/child states are present
        $scope.includes = function(name) {
            return $state.includes(name);
        }

        // Broadcasts a message to pgSearch directive to toggle search overlay
        $scope.showSearchOverlay = function() {
            $scope.$broadcast('toggleSearchOverlay', {
                show: true
            })
        }

    }]);



angular.module('app').service('UploadSvc', ['$http', function ($http) {
    this.uploadFileToUrl = function(file){
        var fd = new FormData();
        fd.append('file', file);
        //console.log("hahahahah")
        return $http.post('/api/upload', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })


    }
}]);


angular.module('app')
    /*
        Use this directive together with ng-include to include a 
        template file by replacing the placeholder element
    */
    
    .directive('includeReplace', function() {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function(scope, el, attrs) {
                el.replaceWith(el.children());
            }
        };
    })