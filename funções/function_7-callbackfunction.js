
//callback function

function sayMyName(name){
    console.log('antes de executar o callback')
    name()
    console.log('depois de executar a callback')
}
sayMyName(
    () => {
        console.log('dentro de uma callback')
    }
)