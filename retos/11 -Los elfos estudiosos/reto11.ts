function getIndexsForPalindrome(word) {
  const array = word.split('')
  let salida = false
  const resultado = []
  const reverseStr = word.split('').reverse().join(''); 
  if(word === reverseStr)
    return []
  const ultPos = word.length - 1
  for(let i=0; i < word.length/2 && !salida; i++){
    if(array[i] !== array[ultPos - i]){
      let indCamb = i
      let b = array.indexOf(array[ultPos -i], i+1)
      if(b === ultPos - i){
        b = array.indexOf(array[i], i+1)
        indCamb = ultPos - i
      }
      if(b === ultPos - i || b < 0){
        salida = true;
      }else{
        resultado.push(b, indCamb)
        const temp = array[indCamb]
        array[indCamb] = array[b]
        array[b] = temp
      }
    }
  }
  return [null, resultado.sort()] [ + (!salida && resultado.length === 2)]
}
