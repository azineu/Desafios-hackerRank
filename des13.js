const arr= [1,2,3,4,5,4,3,2,1,3,4]

function migratoryBirds(arr) {
    let um=[]
    let dois=[]
    let tres=[]
    let quatro=[]
    let cinco=[]
    for(let i=0; i<arr.length;i++){
       if(arr[i]==1){
        um.push(arr[i])
       }
       else if(arr[i]==2){
        dois.push(arr[i])
       }
       else if(arr[i]==3){
        tres.push(arr[i])
       }
       else if(arr[i]==4){
        quatro.push(arr[i])
       }
       else if(arr[i]==5){
        cinco.push(arr[i])
       }
    }
    let frequencias = [um.length, dois.length, tres.length, quatro.length, cinco.length];
    let maxFrequencia = Math.max(...frequencias);

    
    let menorNumeroComMaiorFrequencia = null;
    for (let i = 0; i < frequencias.length; i++) {
        if (frequencias[i] === maxFrequencia) {
            if (menorNumeroComMaiorFrequencia === null || i + 1 < menorNumeroComMaiorFrequencia) {
                menorNumeroComMaiorFrequencia = i + 1;
            }
        }
    }

    return menorNumeroComMaiorFrequencia;
}
console.log(migratoryBirds(arr))