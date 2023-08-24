/**tranformar notas escolares
 * crie um algoritmo que transforme as notas do sistemas numerioc para sistemas em caracteres tipo A B C
 * de 90 para cima - A
 * de 80-89        - B
 * de 70-79        - C
 * de 60-69        - D
 * menor que 60    - F 
 */

//MINHA SOLUÇÃO
let nota = 90

if(nota >= 90){
    console.log('A')
}else if(nota >= 80){
    console.log('B')
}else if(nota >= 70){
    console.log('C')
}else if(nota >= 60){
    console.log('D')
}else{
    console.log('F')
}

/*
//solução rocketseat
let score = 75

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if(scoreA){
   scoreFinal = "A"
}else if(scoreB){
    scoreFinal = "B"
}else if(scoreC){
    scoreFinal = "C"
}else if(scoreD){
    scoreFinal = "D"
}else if(scoreF){
    scoreFinal = "F"
}else{
    scoreFinal = "nota invalida"
}
console.log(scoreFinal)
*/

//solução melhorada
let score = 75

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0
function getScore(score){
    
if(scoreA){
    scoreFinal = "A"
 }else if(scoreB){
     scoreFinal = "B"
 }else if(scoreC){
     scoreFinal = "C"
 }else if(scoreD){
     scoreFinal = "D"
 }else if(scoreF){
     scoreFinal = "F"
 }else{
     scoreFinal = "nota invalida"
 }

}
