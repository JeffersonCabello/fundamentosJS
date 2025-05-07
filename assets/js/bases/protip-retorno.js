//function crearPersona(nombre, apellido){
//  return {nombre,apellido}
//}

const crearPersona = (nombre, apellido) => ({nombre,apellido})

const persona = crearPersona("Jefferson","Cabello");
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (nombre, ...args) => {
    //console.log({nombre,args});
    return args;
}

const [nombre,cedula,edad,casado, saludo] = imprimeArgumentos2("Juan",21123,12,true,false,"Hola");
console.log({nombre,cedula,edad,casado,saludo});

const {apellido: nuevoApellido} = crearPersona("Juan", "Piguabe");
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad:40,
    trajes : ['Mark I','Mark V','Hulkbuster']
};

/*
const imprimePropiedades = (personaje) =>{
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}
*/


const imprimePropiedades = ({nombre,codeName,vivo,edad = 15,trajes}) =>{
    edad = edad || 0;
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);