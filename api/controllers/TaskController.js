/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
    createOnList: function(req, res)
    {
        List.findOne(req.params.listId).populate('tasks').then(function(list)
        {
            if (typeof list == 'undefined')
            {
                res.notFound("List with id " + req.params.listId + " not found");
                console.log("List with id", req.params.listId, "not found");
            }
            else
            {
                Task.create({title: req.body.title}).then(function(info)
                {
                    // res.send(list);
                    list.tasks.add(info);
                    list.save(function(err, lister)
                    {
                        if (!err)
                        {
                            console.log(lister.firstName, lister.lastName, "got a new info.");
                            res.send(info);
                        }
                        else
                        {
                            res.send(err);
                        }
                    });
                }).catch(function(err)
                {
                    res.send(err);
                });
            }
        }).catch(function(err)
        {
            res.send(err);
        });
    },
    createOnTask: function(req, res)
    {
        List.findOne(req.params.listId).populate('tasks').then(function(list)
        {
            if (typeof list == 'undefined')
            {
                res.notFound("List with id " + req.params.listId + " not found");
                console.log("List with id", req.params.listId, "not found");
            }
            else
            {
                Task.create({title: req.body.title}).then(function(info)
                {
                    // res.send(list);
                    list.tasks.add(info);
                    list.save(function(err, lister)
                    {
                        if (!err)
                        {
                            console.log(lister.firstName, lister.lastName, "got a new info.");
                            res.send(info);
                        }
                        else
                        {
                            res.send(err);
                        }
                    });
                }).catch(function(err)
                {
                    res.send(err);
                });
            }
        }).catch(function(err)
        {
            res.send(err);
        });
    }
};

