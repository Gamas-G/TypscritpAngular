
/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACION DE OBJETOS
interface Reproductor{

    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles{

    autor: string;
    anio: number;

}

const reproductos : Reproductor = {

    volumen: 90,
    segundo: 36,
    cancion: 'Another One Bits The Dust',
    detalles: {

        autor: 'QUEEN',
        anio: 1970

    }

}

//const { volumen, segundo, cancion, detalles: { autor: autorDetalle, anio } } = reproductos;
const { volumen, segundo, cancion, detalles } = reproductos;
const { autor, anio } = detalles;

console.log(' El volumen actual es de: ' + volumen);
console.log(' El segundo actual es de: ' + segundo);
console.log(' La cancuon actual es de: ' + cancion);
console.log(' El autor actual es : ' + autor);
console.log(' El año d ela cancion es : ' + anio);

//DESTRUCTURACION DE ARREGLOS
console.log("DESESTRUCTURACION DE ARREGLOS")
/**
 * En la desestructuracion de arreglos la posicion cuenta ya que es como pasar a otro array con el index con nombre correcpondiente a la posicion en la que se encuentra el arreglo
 */
 const dbz:string[] = ['Goku','Vegeta', 'Trunks'];
 const [ Goku, Vegeta, Trunks ] = dbz;
 /**
  * Si solo deceo obtener un unico valor del arreglos en una posicion diferente a la primera la sintaxis seria la sigueinte
  * const [ , , Trunks ] = dbz;
  */
 
 console.log('Personaje 1: ' + Goku)