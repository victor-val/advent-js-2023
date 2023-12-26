function checkIsValidCopy(original, copy){
  if(original.length !== copy.length)
    return false
  const patron = { '#' : 5, '+' : 4, ':' : 3, '.' : 2, ' ' : 1};
  let result = true;
  for(let i = 0; i < original.length; i++){
    const org = original[i]
    const cop = copy[i]
    const areSequence = patron[org] && patron[org] >= patron[cop]
    const isLower = !patron[cop] && cop == org.toLowerCase()
    if(org == cop || areSequence || isLower){
      continue
    }
    if((org != cop && !isLower && org.match(/\W/g)) || !cop.match(/\W/g)){
      result = false
      break;
    }
  }
  return result
}