function Controller ($scope) {
	
 	$scope.counter = 0;

	$scope.likeCounter = function (count) {
		count = count + 1;
		$scope.counter = count;
	}

}
Controller.$inject = ['$scope'];
export { Controller };
