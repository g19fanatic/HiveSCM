hiveApp.config(function($routeProvider, $locationProvider, $logProvider) {
  $routeProvider.when('/', {
      controller: 'MainController'
    });

  $routeProvider.when('/ticket/create', {
      templateUrl: '/pages/create_issue.html',
      controller: 'CreateTicketController'
    });

    $routeProvider.when('/ticket/list', {
      templateUrl: '/pages/list_issues.html',
      controller: 'ListTicketsController'
    });

    $routeProvider.when('/ticket/view/:ticketID', {
      templateUrl: '/pages/view_issue.html',
      controller: 'ViewTicketController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $logProvider.debugEnabled(true);
});

hiveApp.directive('jMenu',function() {
  return {
    restrict: "A",
    link : function(scope, element, attrs) {
      console.log('hit jMenu');
      element.menu();
    }
  }
});

hiveApp.controller('MainController',['$scope', '$route', function($scope, $route) {
  $scope.route = $route;
}]);

hiveApp.controller('CreateTicketController', ['$scope', 'UserService', 'LabelService', function($scope, UserService, LabelService) {
}]);

hiveApp.controller('ListTicketsController',['$scope', 'TicketService', function($scope, TicketService) {
}]);

hiveApp.controller('ViewTicketController',['$scope', '$routeParams', 'TicketService', function($scope, $routeParams, TicketService) {
  $scope.params = $routeParams;
}]);
