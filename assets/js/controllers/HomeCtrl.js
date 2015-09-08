
quicklistApp.controller('HomeCtrl', ['$scope', '$http', 'List', function($scope, $http, List)
{
    $scope.listRoutes = [];
    
    $scope.getFileRoutes = function()
    {
        $http(
        {
            method: 'get',
            url: '/api/list'
        }).success(function(data)
        {
            // $scope.testData = data
            console.log('files?', data);
            $scope.listRoutes = data;
        });
    };
    $scope.getFileRoutes();
    
    /*$scope.colonSwap = function(route)
    {
        return (route.replace(/;/g, '/')).replace(/\/\//, '/');
    }*/
    
    // List.query().then(function(lists)
    // {
    //     $scope.lists = lists;
    // }).catch(function(err)
    // {
        
    // });
    
    $scope.editList = function(list)
    {
        // console.log('EDIT', list);
        
    };
    
    $scope.deleteList = function(list)
    {
        console.log('listDelete', list);
        list.$delete();
    };
}]);
