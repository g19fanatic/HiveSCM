hiveApp.service('TicketService', function($http) {
  return {
    createTicket: function(ticket) {
      return $http.post('/api/createTicket',{"ticket" : ticket});
    },
    getTicketList: function() {
      return $http.get('/api/getTicketList');
    },
    getTicketInfo: function() {},
    updateTicket: function(ticket) {},
  };
});

hiveApp.service('UserService', function($http) {
  return {
    getUsers: function() {
      return $http.get('/api/users');
    }
  };
});

hiveApp.service('LabelService', function($http) {
  return {
    getLabels: function() {
      return $http.get('/api/labels');
    }
  };
});

//returns http promise
hiveApp.service('ConfigurationService', function($http) {
  return {
    getConfig: function() {
       return $http.get('/api/config');
    }
  };
});
