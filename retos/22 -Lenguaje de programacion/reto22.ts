function compile(code) {
  let resultado = 0  
  let index = 0
  let last = -1
  let dentro = null
  const instrucciones = code.split('')
  while(index < instrucciones.length){
    let ins = instrucciones[index]
    resultado += +(dentro !== false) * + (ins === '+')
    resultado -= 1 * +(dentro !== false) * + (ins === '-')
    resultado *= [1,2] [+(dentro !== false) * + (ins === '*')]
    if(ins === '%'){
      last = [last, index][+(dentro !== false)]
    }else if(ins === '<'){
      instrucciones[index]= '_'
      index = [last - 1, index -1][+(last === -1)]
    }
    const a = +(ins === '¿')
    const b = +(resultado > 0)
    const c = +(ins === '?')
    dentro = [dentro, null, true, false][2 * a + c + (1-b) * (1-c) * (a+b)]
    index++
  }
  return resultado
}