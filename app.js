// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // connect to firebase
  var ref = new Firebase('https://blistering-fire-8876.firebaseio.com/days');
  var fireb = $firebase(ref);
  
  // sync as object 
  var syncObj = fireb.$asObject();

  // three way data binding
  syncObj.$bindTo($scope, 'days');

  // function to set the default data
  $scope.reset = function() {    

    fireb.$set({
      monday: {
        name: 'Monday',
        slots: {
        	'1800': {
        		time: '6:00pm',
        		booked: false
        	},
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    

  };

});