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
/*
  Al igual que map, filter nos permite:

  Evitar la mutación de un array dentro de un forEach o el bucle for
  Asignar su resultado directamente a una nueva variable, en lugar de empujar en un array que hemos definido en otra parte
*/
var difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});

/*
var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});
 */
// Using ES6
var difficult_tasks = tasks.filter((task) => task.duration >= 120 );

console.log(difficult_tasks);