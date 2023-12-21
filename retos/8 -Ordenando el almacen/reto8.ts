function organizeGifts(gifts) {
  let resultado = ''
  let regalos = gifts.match(/[a-z]+|[^a-z]+/gi).join(" ")
  const array = regalos.split(' ')
  for(let i=0; i < array.length;){
    let num = array[i]
    const val = array[i+1]
    const e = Math.trunc(num/50)
    if(e)
      resultado += ("[" + val + "]").repeat(e)
    num -= 50 * e
    const f = Math.trunc(num/10)
    if(f)
      resultado += ("{" + val + "}").repeat(f)
    num -= 10 *f
    if(num)
      resultado += "(" + (val).repeat(num) + ')'
    i += 2;
  }
  return resultado
}