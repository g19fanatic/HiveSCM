hiveApp.controller('MainController',['$scope', '$route', 'ConfigurationService', function($scope, $route, ConfigurationService) {
  ConfigurationService.getConfig().then(function successCallback(response) {
      $scope.repoName = response.data.repoName;
      $scope.repoDesc = response.data.repoDesc;
    }, function errorCallback(response) {
      console.log("ConfigurationService - getConfig - error");
    });
  $scope.route = $route;
}]);

hiveApp.controller('CreateTicketController', ['$scope', 'UserService', 'LabelService','TicketService', '$location', function($scope, UserService, LabelService, TicketService, $location) {
  UserService.getUsers().then(function(response) {
    $scope.userList = response.data;
  },function(response) {
    console.log("UserService - getUsers - error");
  });

  LabelService.getLabels().then(function(response) {
    $scope.labelList = response.data;
  },function(response) {
    console.log("LabelService - getLabels - error");
  });

  $scope.ticket = new Ticket();
  $scope.ticketHist = new TicketHistory();
  $scope.ticketHist.actionTaken = TicketActionEnum.OPENED;
  $scope.isSaving = false;

  $scope.saveTicket = function() {
    $scope.isSaving = true;
    $scope.ticket.history.push($scope.ticketHist);
    TicketService.createTicket($scope.ticket).then(function success(response) {
      $location.url('/');
    },function error(response) {
      console.log("TicketService - createTicket - error")
    });
  };
}]);

hiveApp.controller('ListTicketsController',['$scope', 'TicketService', function($scope, TicketService) {
}]);

hiveApp.controller('ViewTicketController',['$scope', '$routeParams', 'TicketService', function($scope, $routeParams, TicketService) {
  $scope.params = $routeParams;
}]);
