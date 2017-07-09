/**
 * Angular Moment Xdan Datetime Picker
 * Author: Cres Jie Labasano
 * Email: cresjie@gmail.com
 * Github: https://github.com/cresjie/angular-moment-xdan-datetimepicker
 * library: https://github.com/zalmoxisus/momentjs-datetimepicker
 */
angular.module('DateTimePicker',[])
      .directive('datetimepicker', function(){
		return {
			require: '?ngModel',
			restrict: 'AE',
			link: function(scope, elem, attr, ngModel){

				elem.datetimepicker(scope.$eval(attr.datetimepicker));
                        
                        ngModel.$render = function(){
                             
                              if(ngModel.$viewValue) {
                                    var date = new moment(ngModel.$viewValue),
                                    format = elem.data('xdsoft_datetimepicker').data('options').format;
                                    
                                    elem.val(date.format(format))
                              }else {
                                   elem.datetimepicker('reset');
                              }
                              
                        }
                        
                        
			}



		};
	});