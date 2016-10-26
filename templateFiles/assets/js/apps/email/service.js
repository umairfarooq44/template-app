angular.module('app')
    .factory('emails', function($http) {

        var list = $http.get('/api/compose').then(function(response) {
            return response.data.emails;
        });
        var emails = {
            all: function() {
                 list = $http.get('/api/compose').then(function(response) {
                    return response.data.emails;
                });
                return list;
            },
            find: function(id) {
                return list.then(function(list) {
                    for (var i = 0; i < list.length; i++) {
                        for (var j = 0; j < list[i].list.length; j++) {
                            if (list[i].list[j]._id == id)
                                return list[i].list[j];
                        }
                    }
                })
            }
        };
        return emails;
    });