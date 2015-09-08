
function List(name, path)
{
    this.name = name;
    this.path = path;
    this.notes = "";
    this.hideNotes = false;
    
    this.tasks = [];
}
List.NextId = 0;
/*Object.defineProperty(List.prototype, 'totalTasks',
{
    get: function()
    {
        return this.tasks.length + this.tasks.reduce(function(cumm, task)
        {
            return cumm + task.totalSubtasks;
        }, 0);
    }
});*/
List.JSONify = function(list)
{
    list.nextId = List.NextId;
    
    return JSON.stringify(list, 4);
};
List.parseJSON = function(json)
{
    list = JSON.parseJSON(json);
    
    List.NextId = list.nextId;
    
    return list;
};


function Task(title)
{
    // this.list = list;
    this.id = List.NextId;
    List.NextId++;
    
    this.completed = false;
    this.title = title || '';
    this.notes = "";
    this.hideNotes = true;
    
    // this.parent = parent || null;
    this.subtasks = [];
    this.hideSubtasks = false;
}
/*Object.defineProperty(Task.prototype, 'totalSubtasks',
{
    get: function()
    {
        console.log('Summing', this.title);
        return this.subtasks.length + this.subtasks.reduce(function(cumm, subtask)
        {
            console.log(cumm, " + ", subtask.title);
            return cumm + subtask.totalSubtasks;
        }, 0);
    }
});*/
