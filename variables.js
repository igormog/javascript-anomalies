Number.MIN_VALUE > 0; // true
/*
Дело в том, что MIN_VALUE это наименьшее число, БОЛЬШЕ НУЛЯ
*/

typeof null; // object
null === Object; // false
/*
null, хоть и имеет тип "object", не является Object'ом
*/

NaN === NaN; // false
/*
Впечатляет, да? Я не могу найти этому объяснения. Автор же просто предполагает, что некоторые люди любят иногда понюхать клей...
*/

typeof NaN; // number
/*
Вот это сильно. Если вдруг кто не помнит, NaN — not a number.
*/

* This source code was highlighted with Source Code Highlighter.