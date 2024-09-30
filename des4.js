//MAIOR SOMA DE QUATRO INTEIROS DENTRO DE UMA ARRAY
arr=[1,2,3,4,5]

arr.sort()
    let minimum = 0;
    let maximun = 0;
    for (let i=1; i< arr.length; i++){
        maximun += arr[i]
    }
    for (let i=0; i< arr.length -1; i++){
        minimum += arr[i]
    }
    console.log(`${minimum} ${maximun}`)  


    