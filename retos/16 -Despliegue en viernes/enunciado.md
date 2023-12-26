# Reto 16 Despliegue en viernes
Ayer viernes alguien hizo despliegue a producci¨®n y se rompi¨® la aplicaci¨®n de montaje de ¨¢rboles de Navidad. Nos han pedido que lo arreglemos lo antes posible.

El problema es que el formato de los ¨¢rboles ha cambiado. Es un array de n¨²meros¡­ ?pero deber¨ªa ser un objeto! Por ejemplo el ¨¢rbol: [3, 1, 0, 8, 12, null, 1] se ve as¨ª:
```
//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1
```
Lo que necesitamos es transformar el array en un objeto donde cada nodo del ¨¢rbol tiene las propiedades value, left y right.

Por ejemplo, al ejecutar tu funci¨®n transformTree con [3, 1, 0, 8, 12, null, 1] deber¨ªa devolver esto:

```
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
```
El elfo que est¨¢ de guardia y que intent¨® solucionar el problema antes de irse a casa, nos ha dejado algunas pistas:

Si un nodo no tiene valor, se representa con null. Por lo tanto, si un nodo tiene valor null, no tendr¨¢ hijos.
El nodo ra¨ªz se encuentra en el ¨ªndice 0 del array.
Existe una relaci¨®n entre el ¨ªndice de un nodo y el ¨ªndice de sus hijos. ?Busca el patr¨®n!