
/*
    ===== Código de TypeScript =====
*/

//Creacion de arreglos. Hay diferentes formas pero se incluye algo nuevo gracias a TY
//Un arreglo normal con sintaxis de JS se veria asi. Estamos declarando un arreglo vacio y si colocamos el cursor es de tipo any
//Tambien aclaremos que aquí se esta incluyendo la instancia del array como se veria en un codigo ejem. nom_vari =  new array()
let primerArray = [];

/**
 * En el ejemplo anterior aprendimos a crear un array de tipo any en este caso
 * pero ahora crearemos uno de un tipo.
 * Tenemo un array de tipo String y  notece que es necesario colocar corchetes sino causa un error de sintaxis, y como se comento en la parte superior este array no estaria instanciado
 */
let segundoArray:String[];

/**
 * En este siguiente ejemplo utilizando las propiedades de TY
 * podemos crear arreglos que acepten diferentes tipos de valores en este caso Numbers y Strings
 * La sintaxis queda de la sigueinte forma
 */
let habilidades:(Number|String)[] = []; //Esto es un arreglo vacio e ilimitado.
//Aqui le asignamos valores pero igual se puede asignar en la misma lines EJMP. let habilidades:(Number|String)[] = [33, 1, "Gamas"];. Esto tambien es valido
habilidades[1] = 33;
habilidades[2] = 1;
habilidades[3] = "Gamas";

console.log("Parametro 1: " + habilidades[1] + " Parametro 2: " + habilidades[2]);
console.log("Parametro 3: " + habilidades[3]);


interface Personaje{
    //Atributos
    nombre: String;
    hp:Number;
    habilidades: String[];
    puebloNatal?:String; //El signo de '?' sirve parace hacer dinamico este atributo. Es decir de que no es necesario colocarle un valor como se observa en el siguiente objeto
}

//Objetos
const personaje: Personaje = { //En este ejemplo el objeto es de tipo Personaje(que es la interface)
    //Notece que no tiene el atributo puebloNatal
    nombre: 'Strider',
    hp:100,
    habilidades: ['Bash','Counter','Healing']
}
//Lo podemos colocar despues sin problema, esto es gracia al signo '?' si lo retiramos del interface causara error de sintaxis
personaje.puebloNatal = 'Pueblo Natal';

console.table(personaje);