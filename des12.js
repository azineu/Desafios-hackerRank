ar=[1,3,2,6,1,2]
n=6;
k=3;

function divisibleSumPairs(n, k, ar) {
   let cont=0
    for(let i =0; i<ar.length; i++){
       
       for (let j=i+1; j<ar.length; j++){
       let divs = ar[i]+ar[j]
       
       if(divs % k== 0){
        cont=cont+1
       } 
        }
    }
       return cont
}
console.log(divisibleSumPairs(n, k, ar))