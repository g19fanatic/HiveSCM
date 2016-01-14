
var TicketActionEnum = Object.freeze({
  OPENED:"OPENED",
  ASSIGNED:"ASSIGNED",
  UPDATED:"UPDATED",
  CLOSED:"CLOSED"
});

function TicketHistory() {
  this.enteredOn = new Date();
  this.enteredBy = "";
  this.description = "";
  this.actionTaken = TicketActionEnum.UPDATED;
}

function Ticket() {
  this.id = 0;
  this.title = "";
  this.createdOn = new Date();
  this.createdBy = "";
  this.assignedTo = "";
  this.isOpen = true;
  this.labels=[];
  this.history=[];
}

function RepoConfig() {
  this.repoName="";
  this.repoDesc="";
  this.serverPort = 9876;
}

var hiveApp = angular.module("hiveApp", ['ngRoute']);

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

    $routeProvider.when('/ticket/view/:ticketId', {
      templateUrl: '/pages/view_issue.html',
      controller: 'ViewTicketController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $logProvider.debugEnabled(true);
});
