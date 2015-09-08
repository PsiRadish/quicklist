/**
 * ListController
 *
 * @description :: Server-side logic for managing lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
var glob = require("glob");

module.exports = 
{
    // get /api/list/:path/:name
	returnList: function(req, res)
    {
        var path = req.params.path.replace(/;/g, '/');
        if (path === '/')
            path = '';
        else
            path += '/';
        
        var filepath = path + req.params.name + '.json';
        var json = require('../../assets/lists/'+filepath);
        // console.log(json);
        res.send(json);
    },
    // get /api/list
    returnFileRoutes: function(req, res)
    {
        // glob("list/**/*.json", {}, function(err, files)
        glob("**/*.json", { cwd: 'assets/lists/' }, function(err, filepaths)
        {
            if (!err)
            {
                console.log(filepaths);
                
                var fileRoutes = {};
                
                filepaths.forEach(function(filepath)
                {
                    // var filepath = /
                    console.log('filepath', filepath);
                    var match = filepath.match(/(?:(.+)\/)?(.+)\.json$/);
                    console.log(match);
                    
                    var routePath;
                    var displayPath;
                    if (typeof match[1] != 'undefined')
                    {
                        routePath = match[1].replace(/\//g, ';') + '/' + match[2];
                        displayPath = match[1] + '/' + match[2];
                    }
                    else
                    {
                        routePath = ';/' + match[2];
                        displayPath = match[2];
                    }
                    
                    fileRoutes[routePath] = displayPath;
                });
                
                res.send(fileRoutes);
            }
            else
                res.send(err);
        });
    }
};
