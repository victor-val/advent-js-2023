# Reto 24 Brincos en la escalera
En la aldea de Santa, hay una escalera m�gica que lleva a la f�brica de juguetes ??. Los elfos, siempre buscando hacer ejercicio y divertirse ?????, deciden saltar los pelda�os de la escalera.

Nos dan steps como el n�mero de pelda�os de la escalera y el n�mero m�ximo de pelda�os maxJump que un elfo puede saltar en un solo salto.

Tu tarea es ayudar a los elfos a encontrar todas las posibles secuencias de saltos que pueden hacer para subir la escalera, ordenadas de menos a m�s. Teniendo en cuenta que los elfos pueden saltar como m�ximo maxJump pelda�os en un solo salto (pero pueden saltar menos pelda�os si as� lo desean).

Por ejemplo, si hay una escalera de steps = 4 y maxJump = 2 es el n�mero m�ximo de pelda�os que un elfo puede saltar en un solo salto, entonces hay cinco secuencias de saltos posibles:

[1, 1, 1, 1] (salta 1 pelda�o 4 veces)
[1, 1, 2] (salta 1 pelda�o 2 veces y luego 2 pelda�os)
[1, 2, 1] (salta 1 pelda�o, luego 2 pelda�os y luego 1 pelda�o)
[2, 1, 1] (salta 2 pelda�os, luego 1 pelda�o y luego 1 pelda�o)
[2, 2] (salta 2 pelda�os 2 veces)
M�s ejemplos:
```
getStaircasePaths(2, 1) // [[1, 1]]
getStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 2)
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
```
