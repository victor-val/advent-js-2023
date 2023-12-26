# Reto 25 Calculando distancias
Ya ha entregado Santa Claus ?? todos los regalos a los ni�os pero quieren revisar si pueden mejorar de cara al a�o que viene.

Los elfos quieren saber cu�ntos movimientos ha hecho Santa Claus ?? para entregar todos los regalos. Para ello, te dan un mapa de la ciudad con la ubicaci�n de cada ni�o y de Santa.

El mapa es una cadena de texto multi l�nea donde cada caracter representa una casilla. Los ni�os se representan por n�meros del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .

Santa Claus s�lo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km. Adem�s, siempre empieza en la posici�n S y debe entregar los regalos en orden, del 1 al 9.
```
const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al ni�o 1: 4 movimientos
Del ni�o 1 al 2: 5 movimientos
Del ni�o 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2
```
Escribe una funci�n travelDistance que reciba un mapa y devuelva la distancia total que ha recorrido Santa Claus seg�n la posici�n de los ni�os.

Ten en cuenta que:

El mapa no tiene por qu� ser cuadrado.
El mapa siempre tendr� al menos un ni�o.
El mapa siempre tendr� una posici�n inicial para Santa Claus.
Los n�meros de los ni�os nunca se repiten.