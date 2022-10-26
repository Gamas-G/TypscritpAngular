/*
    ===== Código de TypeScript =====
*/

//ENCADENAMIENTO OPCIONAL

interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1: Pasajero = {
    nombre: 'Arturo'
}

const pasajero2: Pasajero = {
    nombre: 'Teresa',
    hijos: ['Jesus', 'Victor']
}

function imprimeHijos( pasajero: Pasajero ): void{

    /**
     * Para este caso el signo de '?' esta funcionando como una condicional
     * la cual si el pasajero no tiene hijos la propiedad no esta definida y eso genera un error
     * entonces lo que esta realizando esta sentencia es la evaluacion de que si lo que retorna es un valor número (ya que tiene una funcion length)
     * pero como no lo es esta incluido un OR y retorna el valor ganador.
     * Podria verse esto como una forma muchisimo mas simple que una condicion ternaria
     */
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);