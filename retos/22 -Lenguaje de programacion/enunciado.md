# Reto 22 Lenguaje de programaci�n
En la f�brica de juguetes de Santa, los elfos est�n desarrollando un lenguaje de programaci�n llamado Santa.js ?????????? basado en s�mbolos para controlar sus m�quinas de juguetes ??.

Han creado un sistema de instrucciones simple y necesitan tu ayuda para construir un compilador que interprete estos s�mbolos.

El compilador trabaja con un contador que inicialmente tiene un valor de 0. Las instrucciones modificar�n el valor de este contador.

Instrucciones del lenguaje de los elfos en base a s�mbolos:

+: Incrementa en 1 el valor del contador.
*: Multiplica por 2 el valor del contador.
-: Resta 1 al valor del contador.
%: Marca un punto de retorno. No modifica el contador.
<: Vuelve atr�s una vez a la �ltima instrucci�n con el s�mbolo % que haya visto. Si no hay un % previo, no hace nada.
�: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
?: Finaliza un bloque condicional.
Crea una funci�n compile que reciba un string con las instrucciones del lenguaje y devuelve el resultado de ejecutarlas. Aqu� tienes algunos ejemplos:
```
compile('++*-') // 3
// (1 + 1) * 2 - 1 = 3

compile('++%++<') // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

compile('++<--') // 0
// 1 + 1 - 1 - 1 = 0

compile('++�+?') // 3
// 1 + 1 + 1 = 3

compile('--�+++?') // -2
// - 1 - 1 = -2
```
