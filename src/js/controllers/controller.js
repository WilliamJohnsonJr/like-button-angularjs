function Controller ($scope) {
	
 	$scope.counter = 0;
 	$scope.like = "likes";

	$scope.likeCounter = function (count, like) {
		count = count + 1;
		like = "likes"
		$scope.counter = count;
		if ($scope.counter === 1){
			$scope.like = "like";
		} else {
			$scope.like = "likes";
		};
	};
}
Controller.$inject = ['$scope'];
export { Controller };
