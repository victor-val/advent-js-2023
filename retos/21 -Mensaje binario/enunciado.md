# Reto 21 Mensaje binario
Los elfos est¨¢n recibiendo mensajes binarios extra?os desde Marte ??. ?Los extraterrestres est¨¢n tratando de comunicarse con ellos? ??

El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patr¨®n¡­ Para asegurarse, quieren encontrar el segmento m¨¢s largo de la cadena donde el n¨²mero de 0s y 1s sea igual.
```
findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// posici¨®n del segmento:    [2, 5]
// m¨¢s largo equilibrado
// de 0s y 1s

findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1])
// no hay segmentos equilibrados: []
```
Ten en cuenta que si hay m¨¢s de un patr¨®n equilibrado, debes devolver el m¨¢s largo y el primero que encuentres de izquierda a derecha.

Dicen que si encuentran el patr¨®n, podr¨¢n enviar un mensaje de vuelta a Marte ??. Parece ser que tienen que enviarlos a https://mars.codes.