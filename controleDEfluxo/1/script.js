let temperature = 36.9
let highTemperature  = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature >= 37.5){
    console.log('febre alta')
}else if (mediumTemperature){
    console.log('febre moderada')
}else{
    console.log('saudavel')
}