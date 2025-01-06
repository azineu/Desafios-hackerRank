const scores=[3,4,21 ,36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    let max = scores[0]
    let min = scores[0]
    let pmax = 0
    let pmin = 0

  for(let i=0 ; i<scores.length; i++){
    if(scores[i]>max){
        max=scores[i]
        pmax=pmax+1
    }
    else if(scores[i]<min){
        min = scores[i]
        pmin=pmin+1
    }
  }
return[pmax,pmin]
}console.log(breakingRecords(scores))