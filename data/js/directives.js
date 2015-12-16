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
      element.each(function() {
        $('input[type=radio]', this).get(0).checked = true;
      });
    }
  }
});
