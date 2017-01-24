'use strict';
	mainApp.controller('mainController', function ($scope, $http){

		var users = [];
		$scope.userInfo;

		$scope.getUsers = function(){
			$http.get('/api/users').then(function (response){
				$scope.users = response.data;
				console.log("object form controller GET USER" );
				console.log($scope.users);
				var i;
				for (i = 0; i < $scope.users.length; i++){
					console.log($scope.users[i])
					if( $scope.users[i].username == "undefined email"){
						$scope.users[i].username = "(-)"
					}
					if( $scope.users[i].password == "undefined password"){
						$scope.users[i].password = "(-)";
					}
				}
			});
		}

		$scope.Add = function(){
			console.log("object form controller ADD USER" );
			console.log($scope.user );
			if( typeof $scope.user.username == "undefined" || $scope.user.username == ""){
				$scope.user.username = "undefined email";
			}
			if( typeof $scope.user.password == "undefined" || $scope.user.password == ""){
				$scope.user.password = "undefined password";
			}
			$http.post('/api/users', $scope.user).success(function (response){
				console.log("Contact" + " " + $scope.user.username + " " + "has been added");
			});
			$('#userusername, #userpassword, #userNumber, #userName').val('');
			$scope.getUsers();
		}

		$scope.viewInfo = function (user){
			$scope.userInfo = user;
			console.log($scope.userInfo);
		}


	});


	mainApp.controller('homeController', function ($scope, $http){

		$scope.title = "CONTACT LIST";

		$scope.getUsers();

		// verificar esto

		$scope.addUserMain = function(user){
			$scope.clearUserData = user;
			$scope.clearUserData.username = "";
			$scope.clearUserData.password = "";
			$scope.clearUserData.phonenumber = "";
			$scope.clearUserData.name = "";
		}

		$scope.delete = function (user){
			console.log(user);
			$http.delete('/api/users/' + user._id).success(function (response){
				console.log("user with id" + " " + user._id + " " + "deleted");
			});
			$scope.getUsers();
		}

		$scope.update = function (user){
			console.log(user);
			$http.put('/api/users/'+ user._id, user).success(function (response){
				console.log("user with id" + " " + user._id + " " + "has been updated");
				$scope.getUsers();

			});
		}
	});
