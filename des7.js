const s = 7
const t = 11
const a = 5
const b = 15
apples = [-2,2,1]
oranges = [5,-6]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let contmaca=0;
    let contlar = 0;
    for(let i = 0; i<apples.length; i++){
        let maca = apples[i]+a;
        if(maca<=t && maca>=s){
            contmaca++
        }   
    }
    for(let i =0; i<oranges.length; i++){
        let lar = oranges[i]+b;
        if( lar<=t && lar>=s){
            contlar++;
        }
    }
console.log(contmaca);
console.log(contlar);
}
countApplesAndOranges(s, t, a, b, apples, oranges);



