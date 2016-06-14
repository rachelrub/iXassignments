var app = angular.module("myApp", []);
app.controller("MainCtrl", function($scope){

$scope.newItems = "";
$scope.Items=[];
$scope.addItems = function () {
	$scope.Items.push($scope.newItems);
	$scope.newItems = "";
}
$scope.remove = function($index){
  $scope.Items.splice($index, 1);
}

});