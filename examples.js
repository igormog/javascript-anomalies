// MIN_VALUE это наименьшее число, БОЛЬШЕ НУЛЯ
Number.MIN_VALUE > 0; // true

// null, хоть и имеет тип "object", не является Object'ом
typeof null; // object
null === Object; // false

// no comment
NaN === NaN; // false

// NaN — not a number.
typeof NaN; // number

// Если не поставить ';', то интерпретируется как: var у = f(a+b).toString();
var у = х + f
(a+b) . toString( );

// Проверка со­держит ли переменная х значение NaN:
x == NaN; // Неправильно
х != х; // Правильно
isNaN(x); // Правильно