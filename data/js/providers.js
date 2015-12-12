hiveApp.service('TicketService', function($http) {
  return {
    createTicket: function(ticket) {},
    getTicketList: function() {},
    getTicketInfo: function() {},
    updateTicket: function(ticket) {},
  };
});

hiveApp.service('UserService', function($http) {
  //get user list from server and return it
});

hiveApp.service('LabelService', function($http) {
  //get labels list from server and return it
});

hiveApp.service('ConfigurationService', function($http) {
  return {
    getConfig: function() {
      $http( {
        method: 'GET',
        url: '/api/config'
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log("ConfigurationService - getConfig - Error: " + response.status + " " + response.statusText);
      })
    }
  };
});
