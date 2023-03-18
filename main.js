"use strict";
//1) Написати регулярний вираз, який перевіряє, чи є рядок 6-значним
// числом (приклад з урока треба виправити таким чином, щоб враховувася
// варіант з 0 на початку):

//'123456' -> так
//'-123456' -> так
//'-12345' -> ні
//'023456' -> ні
//'-000016' -> ні

const textForCheck = '123456'
const arrForCheck = ['123456','-123456','-12345','023456','-000016']
const regexp = /^-?[1-9]\d{5}$/
const arrResult = arrForCheck.map(el => regexp.test(el))
console.log(regexp.test(textForCheck))
console.log(arrResult) //  [true, true, false, false, false]

//2) Написати регулярний вираз, який знаходить у рядку всі підрядки
// вигляду a(будь-які букви, хоча б одна)b. наприклад:
//'dfsAJhub sdad gbjhkakjhb kjhab gaCB' -> AJhub, akjhb, aCB
//'FV fjd RJaCLFJSf Bs kjs SK djANbvXBf kd' -> ANbvXB

const textForCheck1 = 'dfsAJhub sdad gbjhkakjhb kjhab gaCB'
const textForCheck2 = 'FV fjd RJaCLFJSf Bs kjs SK djANbvXBf kd'
const regExp = /a\w+b/ig
console.log(textForCheck1.match(regExp))
console.log(textForCheck2.match(regExp))