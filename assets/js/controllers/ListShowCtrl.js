
quicklistApp.controller('ListShowCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) 
{
    /*$scope.remove = function(scope)
    {
        scope.remove();
    };*/
    
    // /list/:path/:name
    
    $scope.list = {};
    
    $http(
    {
        method: 'get',
        url: '/api/list/'+$routeParams.path+'/'+$routeParams.name
    }).success(function(data)
    {
        // $scope.testData = data
        console.log('file?', data);
        $scope.list = data;
        List.NextId = $scope.list.nextId;
    });
    
    console.log("really really?");
    $scope.subtaskToggle = function(scope)
    {
        scope.toggle();
        console.log('ListShowCtrl toggle');
        scope.$modelValue.hideSubtasks = !scope.$modelValue.hideSubtasks;
    };
    
    $scope.moveLastToTheBeginning = function() 
    {
        var a = $scope.list.pop();
        $scope.list.splice(0, 0, a);
    };
    
    $scope.newSubItem = function(scope) 
    {
        var nodeData = scope.$modelValue;
        nodeData.subtasks.push(new Task(nodeData.title + '.' + (nodeData.subtasks.length + 1)));
        /*{
            id: nodeData.id * 10 + nodeData.subtasks.length,
            title: nodeData.title + '.' + (nodeData.subtasks.length + 1),
            subtasks: [],
        });*/
    };
    
    $scope.collapseAll = function() 
    {
        $scope.$broadcast('collapseAll');
    };
    
    $scope.expandAll = function() 
    {
        $scope.$broadcast('expandAll');
    };
}]);


