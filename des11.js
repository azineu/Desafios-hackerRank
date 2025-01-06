const s = [1,1,1,1,1,1]
const d = 3;
const m = 2;
function birthday(s, d, m) {
    let cont = 0;
    for(let i=0; i<=s.length-m; i++){
        let soma= 0;
       for(let j=0; j<m; j++){
        soma=soma+s[i+j]
       } 
        
        if(soma==d){
            cont++
        }
    }
return cont
}console.log(birthday(s,d,m))