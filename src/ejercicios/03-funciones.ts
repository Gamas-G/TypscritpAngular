
/*
    ===== Código de TypeScript =====
*/

//FUNCIONES CON TY
//Esta función es una funcion con sintaxis de JS la cual los parametros no indican el tipo de valor que recibira por lo cual puede ser una suma O una concatencaion
function sumar(a, b){
    return a + b;
}
//Aquí podemos observar que la funcion se ejecuta y el valor retornado se mostrara en consola "3Gamas", debido a que como no se especifica el tipo de retorno
//Ni los tipos de valores esto por formula basica es una concatenacion
const resultado = sumar(3, "Gamas")
console.log(resultado)

/**
 * Ahora podemos hacer lo mismo pero con mas control de la sigueinte forma
 * Creamos una funcion sumar pero notece que ahora los parametros tienen tipo de valor
 * Y el retonro de valor igual puede variar si no se declara el tipo de retorno
 */
function sumarTY(a:number, b:number) : number{
    
    //return (a + b).toString(); Si no se colocara el tipo de retorno esto es aceptable
    return a + b;
}

const resultadoNuevo = sumarTY(10,23)
console.log(resultadoNuevo)

//Sumar dos valores con la funcion de tipo Flecha
//Y esta es la estrucutra con la que se declaran tipos de valores en una funcion de flecha
const SumarFleca = (a:number , b:number):number => {
    return a + b;
}
/**
 * En este ejemplo tenemos una funcion que tiene un parametro que es opcional, al igual que en unas clases anteriores ya habiamos visto como hacer un valor opcional
 * y para este caso es lo mismo con el signo de '?', pero para hacer cumplir esto se debe especificar el tipo de valor
 */
function multiplicar (numero:number, otroNumero?:number, base:number = 2): number{

    return numero * base;
}

const resultMult = multiplicar(5)
console.log(resultMult)

interface PersonajeLOR{

    nombre: string;
    pv: number;
    mostrarHP: () => void;

}
function curar( personaje: PersonajeLOR, curarX: number ): void{
    
    personaje.pv += curarX;

}

//NOTA: EN JS SE ACONSEJA USAR 'const' YA QUE ES MAS LIJERO, ES DECIR EN UN 'var' SE APLICAN LOS SETTER Y GETTERS Y EN LAS const NO.
//      ESTO SI CONOCES QUE EL VALOR NUNCA CAMBIARA

const nuevoPersonaje: PersonajeLOR = {

    nombre: 'Strider',
    pv: 50,
    mostrarHP(){
        console.log('Punetos de vida: ', this.pv)
    }

}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHP();