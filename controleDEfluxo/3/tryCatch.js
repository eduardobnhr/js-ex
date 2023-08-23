//throw

//try..catch


function sayMyName(name){
    if(name === ''){
        throw new Error("sem nome definido")
    }else{
        console.log(name)
    }
}

try{
    sayMyName('edu')
}catch(e){
    console.log(e)
}