/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;
    
    /**
     * En este tipo de contructor lo que se esta realziando es que
     * se esta declarando el parametro como la variable de la intancia de la clase (el equivalente a tenes la variable y settear el valor con this.variable)
     */
    constructor(
        public alterEgo:string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'New York');//Se ase un llamado al constructor de la clase extendida
    }
}

const ironman = new Heroe('Ironman3', 33, 'Tony Stark');//El constructor del extends se llama primero.
console.log(ironman)