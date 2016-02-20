(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('dataFactory', dataFactory);

	function dataFactory($http, $q) {
		return {
			getAll: getAll
		}

		function getAll() {
			var defer = $q.defer();
			var promise = defer.promise;

			$http.get('data.json')
				.success(function(data) {
					defer.resolve(data);
				})
				.error(function(err) {
					defer.reject(err);
				});

			return promise;
		}
	}

}());