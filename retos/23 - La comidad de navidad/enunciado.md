# Reto 23 La comida de navidad
�Santa ?? est� organizando una gran cena navide�a ?? y quiere asegurarse de que todos los platos sean �nicos y variados!

Te da una lista de platos navide�os donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para su preparaci�n.

Tienes que escribir una funci�n que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

As� que devolvemos un array de arrays donde la primera posici�n es el nombre del ingrediente y el resto los nombres de los platos.

Tanto la lista de ingredientes como los platos deben estar ordenados alfab�ticamente.
```
const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

organizeChristmasDinner(dishes)

/*

"sauce" est� en 2 platos: "christmas turkey" y "pizza".
"sugar" est� en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Ense�amos primero "sauce" porque alfab�ticamente est� antes que "sugar".
Y los platos de cada ingrediente tambi�n est�n ordenados alfab�ticamente.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/
```
Ten en cuenta que:

Todos los nombres de los platos son diferentes.
Los nombres de los ingredientes para un plato dado son distintos entre s�.
Si no hay ingredientes repetidos, devolvemos un array vac�o.