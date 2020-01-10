var tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];

var task_names = [];
 
for (var i = 0, max = tasks.length; i < max; i += 1) {
    task_names.push(tasks[i].name);
}

//Usando map
var task_namesMap = tasks.map(function (task, index, array) {
    return task.name; 
});

//Map arrow
var task_namesArrow = tasks.map((task) => task.name );

console.log(task_names);
console.log(task_namesMap);
console.log(task_namesArrow);
