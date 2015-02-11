'use strict';
tempApp.controller('CurrentCtrl', ['$scope',
function ($scope) {
    $scope.temp = 17;
}]);
tempApp.controller('HistoryCtrl', ['$scope',
function ($scope) {

    $scope.historyData = [
    {date: '2015-01-03', day: 'saturday', temp: 8 },
    {date: '2015-01-04', day: 'sunday', temp: 13 },
    {date: '2015-01-05', day: 'monday', temp: 15 },
    {date: '2015-01-06', day: 'tuesday', temp: 11 },
    {date: '2015-01-07', day: 'wednesday', temp: 15 },
    {date: '2015-01-08', day: 'thursday', temp: 17 },
    {date: '2015-01-09', day: 'friday', temp: 21 }
    ];

}]);