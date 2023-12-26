function autonomousDrive(store, movements) {  
  let posIni = store.join('').indexOf('!')
  let long = store[0].length
  let fi = posIni/long | 0
  let col = posIni%long
  store[fi]= store[fi].substring(0, col) + '.' + store[fi].substring(col+1)
  for(const mov of movements){
    const nextFi = fi - (mov === 'U') + (mov === 'D')
    const nextCol = col - (mov === 'L') + (mov === 'R')    
    const canMove = +(store[nextFi]?.[nextCol] === '.')
    fi = [fi, nextFi][canMove]
    col = [col, nextCol][canMove]
  }
  store[fi]= store[fi].substring(0, col) + '!' + store[fi].substring(col+1)
  return store
}