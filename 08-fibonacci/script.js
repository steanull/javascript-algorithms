/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i ++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    fibonacci = fibonacci.slice(0,n);
    console.log (fibonacci);
    return(fibonacci[fibonacci.length - 1]);
}

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)