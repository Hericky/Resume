var app = angular.module('myApp', []);   
app.controller('LanguagesCtrl', function($scope) {
  $scope.Languages = [
    {Language:'Java',Level:'Advanced'},
    {Language:'C',Level:'Intermediate'},
    {Language:'Python',Level:'Beginner'},
    {Language:'MIPS',Level:'Beginner'},
    {Language:'Korn Shell',Level:'Advanced'},
    {Language:'SQL',Level:'Advanced'},
    {Language:'HTML',Level:'Advanced'},
    {Language:'CSS',Level:'Advanced'},
    {Language:'PHP',Level:'Advanced'},
	{Language:'JavaScript',Level:'Advanced'},
    {Language:'XML',Level:'Beginner'},
    {Language:'JAXB',Level:'Beginner'},
    {Language:'MIPS',Level:'Intermediate'},
    {Language:'JSP',Level:'Advanced'},
    {Language:'AngularJS',Level:'Intermediate'},
    {Language:'JQuery',Level:'Intermediate'},
    {Language:'Bootstrap',Level:'Intermediate'},
	{Language:'Spring',Level:'Beginner'},
    {Language:'MVC',Level:'Beginner'}
  ];
  $scope.orderBy = function(x) {
    $scope.OrderBy = x;
  }
});
app.controller('ApplicationsCtrl', function($scope) {
  $scope.Applications = [
    {Application:'Eclipse',Level:'Advanced'},
    {Application:'XAMPP',Level:'Advanced'},
    {Application:'Microsoft SQL Server 2008',Level:'Intermediate'},
    {Application:'Microsoft Office',Level:'Intermediate'},
    {Application:'Photoshop',Level:'Intermediate'},
    {Application:'Putty',Level:'Advanced'},
	{Application:'Oracle 9i through 11g',Level:'Advanced'},
    {Application:'Apache Tomcat',Level:'Intermediate'},
    {Application:'Maven',Level:'Intermediate'},
    {Application:'Ant',Level:'Beginner'}
  ];
  $scope.orderBy = function(x) {
    $scope.OrderBy = x;
  }
});
app.controller('DataCtrl', ['$scope', function($scope) {
  $scope.data = {
    model: null,
    availableOptions:[
    {Language:'Java',Level:'Advanced'},
    {Language:'C',Level:'Intermediate'},
    {Language:'Python',Level:'Beginner'},
    {Language:'MIPS',Level:'Beginner'},
    {Language:'Korn Shell',Level:'Advanced'},
    {Language:'SQL',Level:'Advanced'},
    {Language:'HTML',Level:'Advanced'},
    {Language:'CSS',Level:'Advanced'},
    {Language:'PHP',Level:'Advanced'},
	{Language:'JavaScript',Level:'Advanced'},
    {Language:'XML',Level:'Beginner'},
    {Language:'JAXB',Level:'Beginner'},
    {Language:'MIPS',Level:'Intermediate'},
    {Language:'JSP',Level:'Advanced'},
    {Language:'AngularJS',Level:'Intermediate'},
    {Language:'JQuery',Level:'Intermediate'},
    {Language:'Bootstrap',Level:'Intermediate'},
	{Language:'Spring',Level:'Beginner'},
    {Language:'MVC',Level:'Beginner'}
  ]
  };
}]);
app.controller('formCtrl', function($scope) {
    $scope.master = {Name:"Eneter your name", CompanyName:"Enter your company's name", Email:"Enter email", Position:"Which position available", text:"Comments"};
    $scope.reset = function() {
        $scope.user = {Name:"Eneter your name", CompanyName:"Enter your company's name", Email:"Enter email", Position:"Which position available", text:"Comments"};
    };
    $scope.reset();
});
app.controller('timeController', function ($scope, $filter) {
        $scope.date = new Date();
    })
    .directive(
        'dateInput',
        function(dateFilter) {
            return {
                require: 'ngModel',
                template: '<input type="date"></input>',
                replace: true,
                link: function(scope, elm, attrs, ngModelCtrl) {
                    ngModelCtrl.$formatters.unshift(function (modelValue) {
                        return dateFilter(modelValue, 'yyyy-MM-dd');
                    });
                    
                    ngModelCtrl.$parsers.unshift(function(viewValue) {
                        return new Date(viewValue);
                    });
                },
            };
    });
var myCenter = new google.maps.LatLng(38.04366, -78.51664);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:12,
  scrollwheel:false,
  draggable:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
  $(".navbar a, footer a[href='#home']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
  
  
})
