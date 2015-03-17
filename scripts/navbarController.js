app.controller('navbarController', function($scope){
	
	$scope.affixed = "top";
	$scope.menus = [
		{
			title: "Home",
			action: "home"
		},
		{
			title: "Resume",
			action: "resume"
		},
		{
			title: "Projects",
			action: "project"
		},
		{
			title : "Contact Me",
			action: "contact"
		}
	];


	$scope.buttonPressed = false;
	$scope.toggle = function(){
		$scope.buttonPressed = !$scope.buttonPressed;
	}

});


app.config(["$routeProvider", function($routeProvider){

		// $routeProvider.when('/', {
		// 	templateUrl : 'index.html',
		// 	controller : 'mainController'
		// })

		$routeProvider.when('/resume', {
			templateUrl : 'pages/resume.html',
			controller : 'resumeController'
		})

		$routeProvider.when('/projects', {
			templateUrl : 'pages/projects.html',
			controller : 'projectsController'
		})

		$routeProvider.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
}]);


app.controller('mainController', function($scope) {
	
});

app.controller('resumeController', function($scope) {

});

app.controller('projectsController', function($scope) {
	
});

app.controller('contactController', function($scope) {
	
});











