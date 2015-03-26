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

// app.service('sharedProperties', function () {
//         var isProjectPage = false;

//         return {
//             getProperty: function () {
//                 return isProjectPage;
//             },
//             setProperty: function(value) {
//                 isProjectPage = value;
//             }
//    }
//    });

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

	$scope.isHome = false;

	$scope.toggleHome = function(){
		$scope.isHome = !$scope.isHome;
	}

	$scope.page = "home";

	$scope.pageChange = function(val){
		$scope.page = val;
	}
	// console.log($scope.isProjectPage);
	
});

app.controller('resumeController', function($scope) {

	$scope.isProjectPage = false;
	$scope.title = "RESUME";
	// console.log($scope.isProjectPage);

});

app.controller('projectsController', function($scope) {

	$scope.isProjectPage = true;
	$scope.title = "PROJECTS";
	// console.log($scope.isProjectPage);
	
});

app.controller('contactController', function($scope) {

	$scope.isProjectPage = true;
	$scope.title = "CONTACT ME";
	// console.log($scope.isProjectPage);
	
});

