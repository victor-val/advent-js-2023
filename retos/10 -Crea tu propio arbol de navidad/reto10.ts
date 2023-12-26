function createChristmasTree(ornaments, height) {
  let resultado = ""    
  let ancho = height * 2
  let array = ornaments.split('')
  let k = 0;
  for(let i=0; i < height; i++){
    const asteriscos = i*2+1
    const espacios = (ancho-(asteriscos))/2
    resultado += ['','\n'][+(resultado.length>0)]
    resultado +=  ' '.repeat(espacios)
    for(let j=0; i >= j; j++){
      k = [k, 0] [+ (array.length === k)]
      resultado +=  array[k] + ['',' '][+ (i > j)] 
      k++
    }
  }
  resultado += '\n' + ' '.repeat(height-1) + '|\n'
  return resultado
}