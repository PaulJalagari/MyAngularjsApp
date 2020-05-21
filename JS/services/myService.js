'use strict';
window.app.factory('myService', myService);

myService.$inject = ['$scope', '$http'];

function myService($scope, $http) {
    return {
        getService1: getService1,
        getService2: getService2
    }

    function getService1() {
        return $http.get('./JS/data/service1.json');
    }
    function getService2() {
        return $http.get('./JS/data/service2.json');
    }
}