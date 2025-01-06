const candles = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
    const maxC = Math.max(...candles)
    let qtd = 0
    for( let i=0; i < candles.length; i++){
    if(candles[i]==maxC){
        qtd++
    }
    
};
return qtd
}
console.log(birthdayCakeCandles(candles))