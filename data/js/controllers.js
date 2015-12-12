hiveApp.config(function($routeProvider, $locationProvider, $logProvider) {
  $routeProvider.when('/', {
      redirectTo: '/ticket/list'
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
      element.menu();
    }
  }
});

hiveApp.controller('MainController',['$scope', '$route', 'ConfigurationService', function($scope, $route, ConfigurationService) {
  $scope.route = $route;
  $scope.configData = ConfigurationService.getConfig();
}]);

hiveApp.controller('CreateTicketController', ['$scope', 'UserService', 'LabelService', function($scope, UserService, LabelService) {
}]);

hiveApp.controller('ListTicketsController',['$scope', 'TicketService', function($scope, TicketService) {
}]);

hiveApp.controller('ViewTicketController',['$scope', '$routeParams', 'TicketService', function($scope, $routeParams, TicketService) {
  $scope.params = $routeParams;
}]);
