// Antes, imitação de classe
//construtor/prototipo

function Person(name) {
    this.name = name
}
//getName --> criação de função
Person.prototype.getName = function () {
     return this.name
}

var john = new Person('John Connor')
console.log(john.getName())

// verifica se john é uma instancia do tipo Person e Object
console.log(john instanceof Person)
console.log(john instanceof Object)




// Classe no ES6
class PersonES6 {
    constructor(name){ // propriedades da instancia da classe, que serão inicializadas
        this.name = name
    }

    getName(){ // get 
        return this.name
    }
}
let alifeES6 = new PersonES6('Álife') // instacia da classe inicializando a propriedade nome com um valor 'Álife'
console.log(alifeES6.getName()) // chamando o metodo get da classe

console.log(alifeES6 instanceof Person)
console.log(alifeES6 instanceof Object)


