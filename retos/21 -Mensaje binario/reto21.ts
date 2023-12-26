function findBalancedSegment(message) {
  let maxRange = 0, index = -1
  for(let i = 0; i < message.length - 1; i++){
    let cont1 = 0
    let cont0 = 0
    for(let j = i; j < message.length; j++){
      message[j] === 0 ? cont0++ : cont1++
      if((cont0 === cont1) && ((j - i) > maxRange)){
        maxRange = j - i;
        index = i;
      }
    }
  }
  
  return  [[index, index + maxRange], []] [+(index < 0)]
}