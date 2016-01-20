hiveApp.directive('jMenu',function() {
  return {
    restrict: "A",
    link : function(scope, element, attrs) {
      element.menu();
    }
  }
});

hiveApp.directive('jRadio',[ '$timeout', function($timeout) {
  return {
    restrict: "A",
    link : function(scope, element, attrs) {
      element.buttonset();
      //select the first radio by default
      $timeout(function(){
        $('#radio1').click();
        element.buttonset('refresh');
      },1);
    }
  }
}]);

hiveApp.directive('jButton', ['$timeout', function($timeout) {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      $timeout(function() {
        element.text(attrs.text).button();
      },10);

    }
  }
}]);
