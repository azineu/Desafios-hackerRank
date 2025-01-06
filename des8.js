//FUNÇÃO DE SALTO PARA CANGURUS

const x1 = 0
const v1 = 3
const x2 = 4
const v2 = 2

function kangaroo(x1, v1, x2, v2){
    let s=0
if((x2-x1)%(v1-v2)==0 && (x2-x1)>0 && (v1-v2)>0){
    s = "YES";
}
else{
    s = "NO";
}
return s;
}
console.log(kangaroo(x1, v1, x2, v2) );