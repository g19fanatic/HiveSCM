hiveApp.directive('jMenu',function() {
  return {
    restrict: "A",
    link : function(scope, element, attrs) {
      element.menu();
    }
  }
});

hiveApp.directive('jRadio',function() {
  return {
    restrict: "A",
    link : function(scope, element, attrs) {
      element.buttonset();
      //select the first radio by default
      setTimeout(function(){
        $('#radio1').click();
        element.buttonset('refresh');
      },1);
    }
  }
});
