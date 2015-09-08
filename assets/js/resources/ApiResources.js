
quicklistApp.factory('List', ['sailsResource', function(sailsResource)
{
    /*return sailsResource('List',
    {
        save:
        {
            method: 'POST',
            url: '/api/person/:personId/info'
        },
        update:
        {
            method: 'PUT',
            url: '/api/info/:id'
        }
    });*/
    
    return sailsResource('List');
}]);

quicklistApp.factory('Task', ['sailsResource', function(sailsResource)
{
    return sailsResource('Task');
}]);

