
function cyberReindeer(road, time) {
  const resultado = []
  resultado.push(road)
  let bloqueo = false
  const original = road
  for(let i=1; i<time; i++){
    if(i === 5){
      road = road.replaceAll('|', '*')
      bloqueo = false
    }
    if(road.charAt(i) !== '|' && !bloqueo){
      let pos = road.indexOf("S")
      let posFin = [pos+1, i+1][+(pos === i)]; 
      road = road.substr(0, posFin) + "S" + road.substr(posFin + 1); 
      let temp = road.substr(0, posFin-1)
      temp += ['.', '*'][+(original.charAt(posFin-1) === '|')]      
      road = temp + road.substr(posFin);
    }else{
      bloqueo = true;
    }
    resultado.push(road)
  }
  return resultado
}