//SOMAR NUMERO NEGATIVOS, POSITIVOS E NULOS E FRACIONA-LOS PELO TOTAL DA ARRAY, COM 6 CASAS DECIMAIS


const arr=[-4,3,-9,0,4,1];

const negat= arr.filter(negativo=>negativo<0);
const posit= arr.filter(positivo=>positivo>0);
const zero= arr.filter(zero=>zero==0);

const total = arr.length;
Nnegat= (negat.length/total).toFixed(6);
Nposit= (posit.length/total).toFixed(6);
Nzero= (zero.length/total).toFixed(6);

console.log(Nnegat)
console.log(Nposit)
console.log(Nzero)

//outra forma
