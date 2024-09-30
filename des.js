m =[[11, 2, 4],
    [4, 5, 6],
    [10, 8 ,-12]];
    /*let diag = 0 ;
    let diag1 =0;
 for( let i = 0; i<m.length; i+=4){   
    diag += m[i]; 
}
for( let i = 2; i<7; i+=2){
    
    diag1 += m[i];     
}
let sub = Math.abs(diag - diag1);
console.log(sub);*/
let diag = 0 ;
let diag1 =0;
 for( let i = 0; i<m.length; i++){   
    diag += m[i][i];}
    console.log(diag)