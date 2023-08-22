
//function()constructor


function Person1(name, idade, altura, peso){
    this.name = name;
    this.idade = 22;
    this.altura = 1.78;
    this.peso = 88.50

}
function Person2(name, idade, altura, peso){
    this.name = name;
    this.idade = 24;
    this.altura = 2.78;
    this.peso = 87.50

}
const edu = new Person1("edu")
const joao = new Person2("joao")
console.log(edu)
console.log(joao)