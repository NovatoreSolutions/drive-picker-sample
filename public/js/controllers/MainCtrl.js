angular.module('MainCtrl', ['lk-google-picker','one-drive-picker','dropbox-picker']).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';


	$scope.files = [];

	$scope.onLoaded = function () {
		console.log('Google Picker loaded!');
	};

	$scope.onPicked = function (docs) {
		console.log(docs);
		angular.forEach(docs, function (file, index) {
			console.log(file)
			$scope.files.push(file);
		});
	};

	$scope.onCancel = function () {
		console.log('Google picker close/cancel!');
	};


	$scope.onedrive_files = [];
	$scope.OneDrivedriveSuccess = function (files) {
		angular.forEach(files.value, function (file, index) {
			$scope.onedrive_files.push(file);
		});
	};

	$scope.onOnedriveCancel = function () {
		console.log('Onedrive close/cancel!');
	};

	$scope.onOnedriveError = function () {
		// when error occured.
		console.log('Error!');
	};

	$scope.dpfiles = [];
	console.log("dropbox",$scope.dpfiles)
	$scope.onDropboxSuccess = function (files) {
		angular.forEach(files, function (file, index) {
			$scope.dpfiles.push(file);
		});
	};
	$scope.onDropboxCancel = function () {
		console.log('Dropbox close/cancel!');
	};


});