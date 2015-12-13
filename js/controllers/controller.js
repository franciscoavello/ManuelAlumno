var alumnos = angular.module('VistaAlumnos',['ui.router']);

alumnos.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
	.state('root', {
		url: "/",
	    templateUrl: "root.html"
	})
	.state('encuestas', {
      url: "/encuestas",
      templateUrl: "encuestas.html"
    })
    .state('encuestas.todas', {
      url: "/todas",
      templateUrl: "alumnos-todas.html"
    })
    .state('encuestas.pendientes', {
      url: "/pendientes",
      templateUrl: "alumnos-pendientes.html"
    })
    .state('encuestas.completadas', {
      url: "/completadas",
      templateUrl: "alumnos-completadas.html"
    })
    .state('encuestas.responder', {
      url: "/responder",
      templateUrl: "responder-encuestas.html"
    });
});

alumnos.controller('MenuCtrl', function ($scope, $location) {
  $scope.go = function (target) {
    $location.path(target);
    console.log($location.path(target));
    console.log(target);
  };
});

alumnos.controller("VerEncuestas", function($scope,$http){
			$scope.encuestas = [
				{
					id: 1,
					nombre: "Encuesta PINGESO",
					tipo: "Encuesta 360",
					curso: "Proyecto de Ingeniería de Software",
					fecha: "25/11/2015",
					estado: "finalizada",
					grupo: "1",
					jefe: "Juan Peréz"
				},
				{	
					id: 2,
					nombre: "Encuesta IHC",
					tipo: "Encuesta 360",
					curso: "Interfaz humano-computador",
					fecha: "15/11/2015",
					estado: "pendiente",
					grupo: "3",
					jefe: "Francisco Riquelme"
				},
				{
					id: 3,
					nombre: "Encuesta IHC",
					tipo: "Encuesta Liderazgo",
					curso: "Interfaz humano-computador",
					fecha: "18/11/2015",
					estado: "pendiente",
					grupo: "3",
					jefe: "Francisco Riquelme"
				},
				{
					id: 4,
					nombre: "Encuesta PBD",
					tipo: "Encuesta 360",
					curso: "Proyecto de Base de Datos",
					fecha: "01/11/2015",
					estado: "finalizada",
					grupo: "4",
					jefe: "Pedro Paredes"
				}

			];
			$scope.cursos = [];
			/*
			$http.get("http://jsonplaceholder.typicode.com/photos")
				.success(function(data){
					console.log(data);
					$scope.encuestas = data;
				})
				.error(function(err){

				});*/

});

alumnos.controller("ResponderEncuesta", function($scope,$http){
			$scope.preguntas = [
				{
					id: 1,
					pregunta: "Hola",
					resp1: "sdads",
					resp2: "fsdfsf",
					resp3: "sdfqq",
					resp4: "fsdfgqgq"
				},
				{
					id: 2,
					pregunta: "Que tal",
					resp1: "sdads",
					resp2: "fsdfsf",
					resp3: "sdfqq",
					resp4: "fsdfgqgq"
				},
				{
					id: 3,
					pregunta: "QueOnda",
					resp1: "sdads",
					resp2: "fsdfsf",
					resp3: "sdfqq",
					resp4: "fsdfgqgq"
				},
				{
					id: 4,
					pregunta: "Shwnstaiga",
					resp1: "sdads",
					resp2: "fsdfsf",
					resp3: "sdfqq",
					resp4: "fsdfgqgq"
				}
			];
			/*
			$http.get("http://jsonplaceholder.typicode.com/photos")
				.success(function(data){
					console.log(data);
					$scope.encuestas = data;
				})
				.error(function(err){

				});*/

});

