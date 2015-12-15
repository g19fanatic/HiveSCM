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

hiveApp.controller('ListTicketsController',['$scope', 'TicketService', 'hiveCache', function($scope, TicketService, hiveCache) {
  TicketService.getTicketList().then(function success(response) {
    hiveCache.put('tickets', response.data.tickets);
    $scope.tickets = hiveCache.get('tickets');
  }, function error(response) {
    console.log("TicketService - getTicketList - error");
  });

}]);

hiveApp.controller('ViewTicketController',['$scope', '$routeParams', 'TicketService', 'hiveCache', '$location', function($scope, $routeParams, TicketService, hiveCache, $location) {
  $scope.params = $routeParams;

  hiveCacheInfo = hiveCache.info();
  if (hiveCacheInfo.size < 1)
  {
    TicketService.getTicketInfo($scope.params.ticketId).then(function success(response) {
      ticket = response.data;
      if (ticket.id != $scope.params.ticketId) {
        $location.url('/');
      } else {
        $scope.ticket = ticket;
      }
    },function error(response) {});
  } else {
    for (ticket of hiveCache.get('tickets')) {
      if ($scope.params.ticketId == ticket.id) {
        ticketSet = true;
        $scope.ticket = ticket;
      }
    }
  }
}]);
