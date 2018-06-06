/**
 * Created by Raj Chandra on 30-05-2018.
 */
var app = angular.module('congress',["ngRoute"],function($locationProvider){
    $locationProvider.html5Mode(true);
});

app.controller('authController',['$scope','$http','$location',function ($scope,$http,$location) {

    $scope.getRegistered = function () {
        $('#submitBtn').prop('disabled', true);
        $scope.response = {
            message : "Saving your data. Please wait...",
            code : 2
        };
        $http.post('/register', $scope.participant).then(successCallback, errorCallback);
        function successCallback(response) {
            $('#submitBtn').prop('disabled', false);
            $scope.response = {
                message : response.data.message,
                code : response.data.code
            };
            //All errors in one variable
            $scope.errors = response.data.errors;

            if(response.data.code === 0) {
                window.location.href = "/success";
            }
        }
        function errorCallback(error) {
            $scope.response = {
                message : 'Something went wrong. Please check your network connectivity.',
                code : 1
            };
        }
    };
}]);

angular.module('congress').directive('loader', loader);

/**
 * Defines loading spinner behaviour
 *
 * @param {obj} $http
 * @returns {{restrict: string, link: Function}}
 */
function loader($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$watch(function() {
                return $http.pendingRequests.length;
            }, function(isLoading) {
                if (isLoading) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        }
    };
}
