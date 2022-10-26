/*
    ===== Código de TypeScript =====
*/
//GENERICOS

function queTipoSoy<T>(argumento: T){ //La 'T' hace que el valor adquiera el tipo de valor Generico. Esto con la finalidad de evitar el any (aun que sus usos y entendimiento son mas practioc s y mas estendido)
    return argumento
}

/**
 * Notese que la misma funcion puede recibir y retornar diferentes tipos de datos
 * Esto gracias al tipo de valor Generico
 */
let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([,1,2,3,4,5,6,7,8,9]);

/**
 * En este ejemplo tenemos la funcion que retorna valores pero la cual sus parametro y retornos son de tipo generico
 * lo cual retorna el tipo de valor que se requiere pero tambien podemos especificar el valor que deceamos y sabemos que retornara (algo similar al casteo)
 */
let soyExplisito = queTipoSoy<string>('Hola Mundo');
