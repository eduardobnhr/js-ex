

/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: [] 
* despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
    incomes:[2500,3200,250.43,360.45],
    expenes:[320.34,128.45,176.87,1459.00]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total +- value
    }
    return
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenes)


    const total= calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText ="negativo"

    if(itsOk){
        balanceText = "positivo"
    }
    console.log(`seu saldo é ${balanceText}: ${total}`)
}
calculateBalance()