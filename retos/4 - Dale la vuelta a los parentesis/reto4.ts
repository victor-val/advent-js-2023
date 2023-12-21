function decode(message){
  let ini = message.lastIndexOf('(');
  while(ini > -1){
    const fin = message.indexOf(')', ini);
    let msg = message.substring(ini+1, fin)
    msg = msg.split("").reverse().join("");
    const firstPart = message.substring(0, ini)
    const lastPart = message.substring(fin+1)
    message = firstPart + msg + lastPart;
    ini = message.lastIndexOf('(');
  }
  return message;
}