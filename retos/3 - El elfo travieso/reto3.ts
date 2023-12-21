function findNaughtyStep(original, modified) {
  let index = 0;
  while(index < original.length){
    if(original[index] !== modified[index]){
      return original.length >= modified.length? 
      original[index] : modified[index];
    }
    index++;
  }
  
  return modified[index] ?? '';
}