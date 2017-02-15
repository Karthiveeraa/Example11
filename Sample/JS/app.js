var angularApp = angular.module('angularExample',[]);

angularApp.controller('personCtrl', function ($scope){
	
	
	$scope.myVar = false;
	$scope.calc = function(){
		  $scope.myVar = !$scope.myVar;
	}

	$scope.calc = function(){
		 $scope.myVar = !$scope.myVar;
	}
}
);