function adjustLights(lights) {
  let cambios = 0
  let rojo = true
  let cambiosAux = 0
  for(let j=0; j < 2; j++){
      if(j === 1){
          cambios = cambiosAux
          cambiosAux = 0
          rojo = false
      }
      for(let i=0; i < lights.length; i++){
        if((lights[i] === '🟢' && rojo) || (lights[i] === '🔴' && !rojo)){
          cambiosAux++
        }
        rojo = !rojo
      }
    }

  return [cambiosAux, cambios] [+ (cambiosAux > cambios)]
}