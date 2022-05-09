/* VARIABLES */
let edad = 10; // tipo number
console.log(edad);
console.log(typeof edad)
// puedo cambiar el valor de edad
edad = 20
console.log(edad);
const altura = 174.5
console.log(typeof altura)
console.log(altura);

var nombre = 'carlos'; // define una variable de manera global
let apellido = 'lopez'; //tipo string
//operador typeof para 
console.log(nombre, apellido, typeof apellido);

const flag = true;
const iguales = false;
console.log(typeof flag, flag)

//arrays de string
const nombres = []; // es un array de sring vacios
const materias = ['lengua', 'ingles', 'etc'];
//nombre[pisicion] = valor
let materia = materias[0];
console.error(materia);
//reasignar en la variable materia el valor de materias[1]
console.info(materias[1]);

//quiero vrear una persona
let persona = {
    edad: 36,
    argentina: true,
    nombre: 'carlos',
    apellido: 'lopez',
    idiomas: ['español', 'ingles']

}
console.log(persona, typeof persona);

//undefined
let perro = undefined;
perro = {
    apodo : 'firulais'
}
perro = {
    apodo : 'perrito',
    edad : 100,
}


console.log(perro, typeof perro)

let gato = null;
gato = {edad : 100};
console.log(gato, typeof gato)

/* los tipos de datos tienen metodos o funciones */
let nacionalidad = '     argentina    ';
console.log(nacionalidad);
console.log(nacionalidad.length);
//al ser un string puedo ejecutar ciertos metodos o funciones
nacionalidad = nacionalidad.trim()
console.log(nacionalidad);
nacionalidad = nacionalidad.toUpperCase();
console.log(nacionalidad);
nacionalidad = nacionalidad.toLocaleLowerCase();
console.log(nacionalidad);
console.log(nacionalidad.length);

//ejemplo de number y sus metodos

let valorNumericoGuardadoEnString = '100';
valorNumericoGuardadoEnString = valorNumericoGuardadoEnString + 1;
console.log(valorNumericoGuardadoEnString)

valorNumericoGuardadoEnString = parseInt(valorNumericoGuardadoEnString) + 1;
console.log(valorNumericoGuardadoEnString)
//valorNumericoGuardadoEnString = +valorNumericoGuardadoEnString + 1;
//valorNumericoGuardadoEnString = Number(valorNumericoGuardadoEnString) + 1;

let valorFlotanteEnString = '175.5';
console.log(parseInt(valorFlotanteEnString))
console.log(parseFloat(valorFlotanteEnString))
console.log(Number(valorFlotanteEnString))
