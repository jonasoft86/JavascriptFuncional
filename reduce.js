
const mascotas = [
    { nombre:"perro" , edad: 3, tipo:"mascota"},
    { nombre:"gato" , edad: 1, tipo:"mascota"},
    { nombre:"loro" , edad: 13, tipo:"ave"},
    { nombre:"lobo" , edad: 12, tipo:"salvaje"},
    { nombre:"tiburon" , edad: 22, tipo:"acuatico"},
];

//devolvemos objeto
const indexed = mascotas.reduce((acumulador,element)=>({...acumulador,[element.nombre]: element}),{})

console.log(indexed['perro'])

