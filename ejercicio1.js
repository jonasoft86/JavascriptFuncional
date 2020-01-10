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

var newTasks = [];

tasks.forEach(task => { console.log({name: task.name})});
//tasks.forEach(task => { newTasks.push({name: task.name})});
//console.log(newTasks)
