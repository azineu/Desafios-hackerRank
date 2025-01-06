//ENTRE DOIS CONJUNTOS 

const a =[2, 4]
const b = [16, 32, 96]
function getTotalX(a, b) {
    // Write your code here
    /*const mult = [];
    for(let i = 1; i<=96; i++){
       for(let j = 0; j<a.length; j++){
            if(i % a[j]===0){
                mult.push(i);
                break;
            }
       }
    }*/
       const mult = [];
       const maxA = Math.max(...a); // Maior número em a
       const minB = Math.min(...b); // Menor número em b
   
       // Verificar números de maxA até minB
       for (let i = maxA; i <= minB; i++) {
           // Verifica se i é múltiplo de todos os elementos em a
           if (a.every(num => i % num === 0)) {
               // Verifica se i é divisor de todos os elementos em b
               if (b.every(num => num % i === 0)) {
                   mult.push(i); // Adiciona i ao array de múltiplos
               }
           }
       }
   
       return mult.length; // Retorna a quantidade de elementos válidos


}console.log(getTotalX(a,b))