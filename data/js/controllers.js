hiveApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/ticket/create', {
      templateUrl: 'data/pages/create_issue.html',
      controller: 'CreateTicketController'
    })
    .when('/ticket/list', {
      templateUrl: 'data/pages/list_issues.html',
      controller: 'ListTicketsController'
    })
    .when('/ticket/view/:ticketID', {
      templateUrl: 'data/pages/view_issue.html',
      controller: 'ViewTicketController'
    });

    $locationProvider.html5Mode(true);
});

hiveApp.controller('MainController', function($scope, $route, $location) {
  $scope.route = $route;
  $scope.location = $location;
});

hiveApp.controller('CreateTicketController', function($scope, $routeParams, UserService, LabelService) {
  $scope.params = $routeParams;
});

hiveApp.controller('ListTicketsController', function($scope, $routeParams, TicketService) {
  $scope.params = $routeParams;
});

hiveApp.controller('ViewTicketController', function($scope, $routeParams, TicketService) {
  $scope.params = $routeParams;
});
