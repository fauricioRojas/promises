(function() {
	'use strict';

	angular
		.module('myApp', [])
		.controller('myCtrl', myCtrl);

	function myCtrl($scope, dataFactory) {
		dataFactory.getAll()
			.then(function(response) {
				$scope.persons = response;
			})
			.catch(function(err) {

			});
	}

}());