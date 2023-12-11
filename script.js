//№1
/*
((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)
=>
(false || true) && !(false && true)
=>
true && !(false)
=>
true && true
=> true
*/

//№2
let age = 7

if (age > 0 && age < 101) {
  if (age >= 18 && age <= 59) {
    console.log('Вам еще работать и работать')
  } else if (age >= 1 && age <= 17) {
    console.log('Вам еще рано работать')
  } else {
    console.log('Вам пора на пенсию')
  }
}

//№3
let arr = [Math.floor(Math.random() * 1001)]
var n = arr.join().split('')
var num = n[n.length - 1]
var j = n.join('')
if (num == 1) {
  console.log(`на ветке сидела ${j} ворона`)
} else if (num == 2 || num == 3 || num == 4) {
  console.log(`на ветке сидело ${j} вороны`)
} else {
  console.log(`на ветке сидело ${j} ворон`)
}

//№4
let num1 = Math.floor(Math.random() * (101 - -100)) + -100
let num2 = Math.floor(Math.random() * (101 - -100)) + -100
let num3 = Math.floor(Math.random() * (101 - -100)) + -100
let array = [num1, num2, num3].sort(function (a, b) {
  return a - b
})
console.log(`Наибольшее число: ${array[2]} \n Наименьшее число: ${array[0]}`)

//№5
let apple = 100
let orange = 150
var n1 = Math.floor(Math.random() * 11)
var n2 = Math.floor(Math.random() * 11)
console.log(`Яблок: ${n1} \n Апельсинов: ${n2}`)
if (apple * n1 > orange * n2) {
  console.log('Бери яблоки!')
} else console.log('Бери апельсины!')
