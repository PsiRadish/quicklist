/**
* Task.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = 
{
    attributes: 
    {
        completed:
        {
            type: 'boolean',
            defaultsTo: false
        },
        title:
        {
            type: 'string',
            required: true
        },
        notes:
        {
            type: 'text',
            defaultsTo: null
        },
        
        // ASSOCIATIONS
        list:
        {
            model: 'List',
            defaultsTo: null
        },
        parentTask:
        {
            model: 'Task',
            defaultsTo: null
        },
        subtasks:
        {
            collection: 'Task',
            via: 'parentTask'
        }
    }
};
