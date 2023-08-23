/**Manipulando strings e numeros
 * transformar String em numero e numero em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = 'chatubademesquita'
console.log(word.length)
let number1 = 1234
console.log(String(number1).length)

//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

let number2 = 31413213124.8534954
console.log(number2.toFixed(2).replace(".", ","))


//array
let phrase = "eu to testando"
let myArray = phrase.split("o")
console.log(myArray)

//string para arrays
//manipulando e transformando cada caracter da palavra em um elemento do array
let word1 = "manipulação"
console.log(Array.from(word))//array.from faz com que cada letra vire um elemento do array => começando do 0 = m
 */

//manipulando arrays

let techs = ["html", "css","js"]
//adicionando um item no fim do array
techs.push("java")
//adicionar no começo no array
techs.unshift("sql")
//remover no final do array
//techs.pop()
//remover do começo
//techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

//remover um ou mais itens do array
techs.slice(1, 1)
//encontrar a posição de um elemento no array

let index = techs.indexOf('java')
techs.splice(index, 1)



console.log(index)