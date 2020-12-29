(function () {
'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController', function ($scope) {
	
	$scope.MunchMessage = "";
	$scope.CheckLunch = function () {
		var listCount = $scope.Dishes;
		if (!listCount | listCount == ""){
			$scope.MunchMessage = "Please enter data first.";
		} else if (listCount.split(',').length > 3) {
			$scope.MunchMessage = "Too Much!"
		} else {
			$scope.MunchMessage = "Enjoy!"
		};
	};

	});
})();

