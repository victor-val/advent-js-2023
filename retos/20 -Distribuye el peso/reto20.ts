function distributeGifts(weights) {
  const result = []
  for (const [i, row] of weights.entries()) {
    result[i] = []
    for (const [j, cell] of row.entries()) {      
      let valor = weights[i][j]
      let izq = weights?.[i]?.[j-1]
      let dcha = weights?.[i]?.[j+1]
      let up = weights?.[i-1]?.[j]
      let down = weights?.[i+1]?.[j]
      valor = [0, valor] [+(valor !== null)]
      up ??= 0, down ??= 0, izq ??= 0, dcha ??= 0
      let div = !!valor + !!up + !!down
      + !!izq + !!dcha
      result[i][j] = Math.round((valor + izq + dcha + up + down) / div)
    }
  }
  return result
}