

console.log('Gamas estoy vivo');

//Los tipos de datos en TS tienen una similitud con la sintaxis a kotlin.
//Como se observa en JS los tipos de varibles son inecesarios pero aquí podemoss colocarle el tipo de varibale y corregir confuciones y hacerlo mas estricto
let nombre:String = "SALUDOS CRACK ESTAS EN TYPESCRIPT, FELICIDADES!!!!"

console.log(nombre)


let auto:string



//Esto es un objeto, igual que en JS
const auto_nuevo = {
nombre:"A4",
marca:"Audi",
precio:19999
}

console.log(auto_nuevo.nombre)
/*
    ===== Código de TypeScript =====
*/
//Algo que otorga TS es la variedad de tipo de datos en una variable
//En este ejemplo una variable que puede contener un String O un valor numerico si este se sobre escribe
let miNombre: String | Number = "Gamas"
miNombre = 123

//Tambien hay un tipo de valor que acepta cualquier dato
//Este valor puede aceptar lo quesea(pero es recomendable por buenas practicas no utilizarlo)
let miVariableAny: any

//Recordemos que en JS no declarar el tipo de variable esta toma la que se le asigna. Como TY esta basado en JS sucede lo mismo
let variableSinAsignar = true;