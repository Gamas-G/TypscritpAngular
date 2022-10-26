/*
    ===== Código de TypeScript =====
*/
//DECORADORES

function classDecorator<T extends { new ( ...args: any[] ): {} }>(
    constructor: T
){
    return class extends constructor{
        newProperty: "New property";
        hello: "override";
    };
}


@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}


console.log(MiSuperClase)