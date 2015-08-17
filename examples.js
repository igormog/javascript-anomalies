Number.MIN_VALUE > 0; // true
/*
MIN_VALUE это наименьшее число, БОЛЬШЕ НУЛЯ
*/

typeof null; // object
null === Object; // false
/*
null, хоть и имеет тип "object", не является Object'ом
*/

NaN === NaN; // false
/*
no comment
*/

typeof NaN; // number
/*
NaN — not a number.
*/


// Если не поставить ';', то интерпретируется как: var у = f(a+b).toString();
var у = х + f
(a+b) . toString( );

// Проверка со­держит ли переменная х значение NaN:
x == NaN; // Неправильно
х != х; // Правильно
isNaN(x); // Правильно