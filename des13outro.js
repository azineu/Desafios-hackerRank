const arr= [1,2,3,4,5,4,3,2,1,3,4]

function migratoryBirds(arr){
    const values = {}

    arr.forEach((item) => {
      const qnt = (values[item] || 0) + 1
      let mostRepeat = values.mostRepeat || item
      const mostRepeatValue = values[mostRepeat] || 0
  
      if (qnt > mostRepeatValue || (item < mostRepeat && qnt === mostRepeatValue)) {
        mostRepeat = item
      }
  
      values[item] = qnt
      values.mostRepeat = mostRepeat
    })
  
    return values.mostRepeat
}
console.log(migratoryBirds(arr))