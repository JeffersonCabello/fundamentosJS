let a = 5;

if(a >= 10){
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');
}

//console.log('Fin de programa');

const hoy = new Date();

let dia = hoy.getDay();

console.log({dia});

if(dia === 0 ){
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');

    /*
    if(dia === 1){
        console.log('Lunes');
    }else{
        console.log('Hoy no es Lunes ni Domingo');
    }
    */

}else if(dia === 2){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo...');
}



dia = 0;

const diasDeLaSemana = ['Domingo','Lunes','Martes','Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diasDeLaSemana[dia]  || "Dia no valido");

const diasObj = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado'
}

dia = 10;

console.log(diasObj[dia] || "Dia no valido");
