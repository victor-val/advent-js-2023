function drawGift(size, symbol) {
  let result = ''
  const lines = (size * 2) -1;
  for(let x=0; x < lines; x++){
    result+=' '.repeat([0, size-x-1] [+ (size-x > 0)])  
    if(x === 0 || x === size -1 || x === lines-1)
      result += '#'.repeat(size);
    else{
      result += '#' + symbol.repeat(size-2) + '#'
    }
    if(x !== 0 && x!== lines-1){
      const cant=[lines/2-x+size-2,x-1] [+ (size-x>0)]
      result += symbol.repeat(cant) + '#';
    }
    result += '\n'
  }
  return result
}