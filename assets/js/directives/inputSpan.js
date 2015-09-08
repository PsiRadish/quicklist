quicklistApp.directive('focusOn', function() 
{
    return function(scope, elem, attr) 
    {
        scope.$on(attr.focusOn, function(e) 
        {
             elem[0].focus();
        });
    };
});

quicklistApp.directive('inputSpan', function()
{
    return(
    {
        restrict: 'E',
        scope:
        {
            type:        '@?',
            class:       '@?',
            placeholder: '@?',
            disabled:    '@?',
            name:        '@',
            moreAttrs:   '@?',
            ngModel:     '='
        },
        controller: ['$scope', '$element', function($scope, $element)
        {
            $scope.editing = false;
            
            console.log('inputSpan name', $scope.name);
            
            // console.log($element.prop('nodeName'));
            // console.log('$element[0].childNodes', $element[0].childNodes);
            // console.log('ngModel', $scope.ngModel);
            
            // console.log('disabled', $scope.disabled);
            
            $scope.lastClickTime = null;
            
            $scope.spanClick = function()
            {
                if ($scope.lastClickTime = null)
                {
                    $scope.lastClickTime = new Date();
                    
                }
                
                $scope.editing = true;
                
                setTimeout(function()
                {
                    $element[0].childNodes[1].focus(); // OMG HAX
                }, 100);
            }
        }],
        template:
          '<span class="{{name}}-input-span">' +
          '  <input ng-show="editing" focus-on="editing" ng-blur="editing=false" ng-model="ngModel" type="{{type}}" name="{{name}}" class="form-control {{class}}" placeholder="{{placeholder}}" {{moreAttrs}}>' +
          '  <span ng-show="!editing" ng-click="spanClick()" class="">{{ngModel}}</span>' +
          '</span>',
        replace: true
    });
})

;
