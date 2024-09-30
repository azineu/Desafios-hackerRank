//PIRAMIDES DE # ALINHAA A DIREITA
let n=6;

for( let i=0; i<n; i++){
    let linha = '';

    for (let j=0;j<n-i-1;j++){
        linha+= ' ';
    }
    for(let j=0 ;j<=i; j++){
        linha+='#';
    }
 
console.log(linha);
}

//outra forma 
    function staircase(n){
        for (let i=1; i<=n;i++){
            const line = ''.padStart(n-i,' ').padEnd(n, '#');
            console.log(line)
        }
    }staircase(n);